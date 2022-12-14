import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { __getPostsDetail } from "../../redux/modules/board";
import AddComment from "./AddComment"
import { __deletePosts, __likePost, __deleteAdminPosts } from "../../redux/modules/board";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import delete2 from "../../assets/icons/delete2.png"
import edit from "../../assets/icons/edit.png"
import report from "../../assets/icons/report.png"
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";
import Swal from "sweetalert2";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
//κ΄λ¦¬μμ©
import { __getUser } from "../../redux/modules/signup";

const Detail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const { isLoading, error, detail } = useSelector((state) => state?.post);
    const { user } = useSelector((state) => state.user);
    const { postId } = useParams();

    useEffect(() => {
        dispatch(__getPostsDetail(postId));
        dispatch(__getUser())
    }, [])

    if (isLoading) return "π΄λ‘λ©μ€μ΄μμ..π΄"

    if (error) {
        return <>{error.message}</>
    }

    const goEdit = () => {
        navigate(`/edit/${postId}`)
    }
    const goReport = () => {
        navigate(`/report`)
    }
    const onLike = (event) => {
        event.preventDefault();
        dispatch(__likePost(postId))
    };

    // URL μλ ₯ν΄μ λ€μ΄μ€λ κ²½μ° λ‘κ·ΈμΈ μ λ¬΄ νλ¨ ν 2μ΄λ€ λ‘κ·ΈμΈ νμ΄μ§λ‘ λ³΄λ
    const getNickname = localStorage.getItem("nickname")
    if (getNickname === null) {
        Swal.fire({
            title: 'λ‘κ·ΈμΈμ΄ νμν©λλ€.π’'
            , icon: 'error'
        })
        setTimeout(() => {
            (navigate('/login'))
        }, 2000);
    }


    // κ΄λ¦¬μ νμΈμ© 
    const admin = user?.role

    return (
        <Container>
            <Btnbox>
                <ArrowBackIosIcon className="BackBtn" fontSize="large" onClick={() => { navigate(-1); }}></ArrowBackIosIcon>
            </Btnbox>
            <Title>
                {detail?.title}
            </Title>

            <Date>{detail?.createdAt}</Date>
            <DateButtonWrapper>
                {getNickname === detail?.nickname ?
                    (
                        <div style={{ gap: "10px", marginRight: "10px" }}>
                            <EditButton onClick={goEdit}><img src={edit} alt="" /></EditButton>
                            <DeleteButton onClick={() => { setShow(true) }}><img src={delete2} alt="" /></DeleteButton>
                        </div>
                    )
                    :
                    //κ΄λ¦¬μμ© μ­μ λ²νΌ λ³΄μ΄κΈ°~
                    (admin !== "ADMIN" ?

                        <ReportButton onClick={goReport}><img src={report} alt="" /></ReportButton>
                        :
                        <div style={{ gap: "10px", marginRight: "10px" }}>
                            <DeleteButton onClick={() => { setShow(true) }}><img src={delete2} alt="" /></DeleteButton>
                        </div>
                    )}
            </DateButtonWrapper>

            <Swiper pagination={true} modules={[Pagination]} className="mySwiper" >
                {detail?.imgList?.map((image, id) => (
                    <SwiperSlide key={id}>
                        <ImgBox>
                            <img src={image} alt="" />
                        </ImgBox>
                    </SwiperSlide>
                ))}
            </Swiper>

            <NameLikeWrap>
                <div style={{ display: "flex" }}>
                    <div style={{ fontSize: "1.2rem", marginLeft: "10px", fontWeight: "bold", width: "70px" }}>{detail?.nickname}</div>
                    <View>View : {detail?.view}</View>
                </div>
                <div style={{ fontSize: "1rem", display: "flex", width: "380px", justifyContent: "right", paddingRight: "10px" }}>
                    <span onClick={onLike}>π</span> {detail?.likes}κ°
                </div>
            </NameLikeWrap>

            <Content><p>{detail?.content}</p></Content>
            <div style={{ marginTop: "10px" }}>
                <AddComment detail={detail} />
            </div>

            {/* Modal */}
            <Dialog open={show}>
                <DialogContent style={{ position: "relative", width: "200px", textAlign: "center", height: "100px" }}>
                    <IconButton
                        style={{ position: "absolute", top: "0", right: "0" }}
                        onClick={() => setShow(false)}
                    >
                        <DisabledByDefaultOutlinedIcon />
                    </IconButton>

                    {/* κ΄λ¦¬μμΌκ²½μ° μ­μ νλ urlμ΄ λ¬λΌ λ³κ²½ν΄λ  */}
                    {admin !== "ADMIN" ?
                        <div className="modal">
                            <div className="modal-title"> μ λ§ μ­μ νμκ² μ΅λκΉ ?</div>
                            <div className="modal-button" style={{ paddingTop: "30px" }}>
                                <ModalYesButton
                                    variant="outlined"
                                    color="error"
                                    onClick={async () => {
                                        setShow(false);
                                        // λͺ¨λ¬μ μ λ²νΌ ν΄λ¦­μ κ²μλ¬Ό μ­μ 
                                        dispatch(__deletePosts(postId))
                                        alert("κ²μλ¬Όμ΄ μ­μ λμμ΅λλ€π");
                                        navigate("/board/taste");
                                    }}
                                >
                                    μ
                                </ModalYesButton>
                                <ModalCancleButton
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => {
                                        setShow(false)
                                    }}
                                >
                                    μλμ€
                                </ModalCancleButton>
                            </div>
                        </div>
                        :
                        <div className="modal">
                            <div className="modal-title"> μ λ§ μ­μ νμκ² μ΅λκΉ ?</div>
                            <div className="modal-button" style={{ paddingTop: "30px" }}>
                                <ModalYesButton
                                    variant="outlined"
                                    color="error"
                                    onClick={async () => {
                                        setShow(false);
                                        // λͺ¨λ¬μ μ λ²νΌ ν΄λ¦­μ κ²μλ¬Ό μ­μ 
                                        dispatch(__deleteAdminPosts(postId))
                                        alert("κ΄λ¦¬μ κΆνμΌλ‘ μ­μ λμμ΅λλ€π");
                                        navigate("/board/taste");
                                    }}
                                >
                                    μ
                                </ModalYesButton>
                                <ModalCancleButton
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => {
                                        setShow(false)
                                    }}
                                >
                                    μλμ€
                                </ModalCancleButton>
                            </div>
                        </div>
                    }

                </DialogContent>
            </Dialog>
        </Container>

    )
}

export default Detail;


const Container = styled.div`
    max-width: 428px;
    width : 100%;
    margin:0 auto;
    height: 100vh;
    background-color: white;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(250, 213, 213, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(252, 112, 112, 0.3);
    border-radius: 6px;
  }

    .BackBtn{
     cursor: pointer;   
    }
    @media all and (max-width : 390px) {
   max-width : 390px;
   }
`

const Btnbox = styled.div`
    width: 300px;
    padding-left: 10px;
    padding-top: 120px;
`


const Title = styled.h1`
    text-align: center;
`

const Date = styled.div`
    font-size: 1rem;
    margin-left: 12px;
    float: right;
    text-align: center;
    margin-right: 20px;
    margin-top: 10px;
`
const DateButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    float: left;
    gap: 10px;
    margin-left: 15px;
`

const Content = styled.div`
    margin: 0 auto;
    margin-top: 12px;
    width: 90%;
    height: 35vh;
    border-top: 1px solid #9E87BA;
    font-size: 20px;
`

const ImgBox = styled.div`
    width: 100%;
    height: 100%;
    z-index: -99;
`

const View = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding-left: 230px;
    margin: auto;
    float:right;
`;

const NameLikeWrap = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
    margin-top:10px;
    width: 380px;
    height: 50px;
    flex-direction: column;
`
const EditButton = styled.button`
    cursor: pointer;
    width: 40px;
    height: 30px;
    border: none;
    margin: 0 0 auto 0;
    margin-top: 5px;
    background-color: white;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const DeleteButton = styled.button`
    cursor: pointer;
    width: 40px;
    height: 30px;
    border: none;
    margin: 0 0 auto 0;
    margin-top: 5px;
    background-color: white;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ReportButton = styled.button`
    width: 40px;
    height: 30px;
    border: none;
    margin: 0 0 auto 0;
    margin-top: 5px;
    background-color: white;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ModalYesButton = styled.button`
    width: 80px;
    height: 40px;
    margin-right: 20px;
    border: none;
    background-color: skyblue;
    border : 2px solid skyblue;
    border-radius: 5px;
    cursor: pointer;
`

const ModalCancleButton = styled.button`
    width: 80px;
    height: 40px;
    border: none;
    background-color: #db6a6a;
    border : 2px solid #db6a6a;
    border-radius: 5px;
    cursor: pointer;
`