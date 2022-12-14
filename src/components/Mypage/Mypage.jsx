import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getMypage } from "../../redux/modules/mypage";
import EditModal from "./modal/EditModal";
import useOnClickOutside from "./modal/useOnClickOutside";
import LikeMeCard from "./LikeMeCard";
import LoveweCard from "./LoveweCard";
import ProfileEditModal from "./profileModal/ProfileEditModal"
import useProfileOnClickOutside from "./profileModal/ProfileUseOnClickOutSide"

import {
    MypageBox, Myinfo, Profile, InfoBody, Age, MBTI, OneLine, ModifyBtn, SecondMypageBox, SecondMyinfo,
    ListBox, Listtitle, LovemeBox, LoveCard, MatchingBox, MatchingCard, StBodyInput, StButton, AddMyinfo,
    MiniBox, MiniTitle, MiniInput, MiniHeader, BtnBox, OnlineBox, OneLineTitle, AreaInput, Area, Container
} from "./Mypagestyled";




const Mypage = () => {

    const [post, setPost] = useState();
    const [isClickEdit, setIsClickEdit] = useState(false);
    const modalRef = useRef();
    const handleClickOutside = () => setIsClickEdit(false);
    useOnClickOutside(modalRef, handleClickOutside);


    const [profile, setprofile] = useState();
    const [isClickProfileEdit, setIsClickProfileEdit] = useState(false);
    const profilemodalRef = useRef();
    const handleprofileClickOutside = () => setIsClickProfileEdit(false);
    useProfileOnClickOutside(profilemodalRef, handleprofileClickOutside);


    const dispatch = useDispatch();
    const [input, setInput] = useState(false);

    const [area, setArea] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [idealType, setIdealType] = useState("");
    const [job, setJob] = useState("");
    const [hobby, setHobby] = useState("");
    const [drink, setDrink] = useState("");
    const [pet, setPet] = useState("");
    const [smoke, setSmoke] = useState("");
    const [likeMovieType, setLikeMovieType] = useState("");



    //??????????????? ?????? ???????????? ????????????
    const mypage = useSelector((state) => state.mypage);
    const { profileId } = useParams();

    //??????????????? ?????? ??????
    const userInfo = mypage.mypage.data

    useEffect(() => {
        dispatch(__getMypage(profileId));
    }, [])




    const onUpdatePost = async () => {
        if (introduction === "" || area === "") {
            return alert("???????????? ????????? ?????? ????????????????????????! ???? ")
        };


        const useraddInfo = {
            introduction: introduction,
            area: area,

            idealType: idealType,
            job: job,
            hobby: hobby,
            drink: drink,
            pet: pet,
            smoke: smoke,
            likeMovieType: likeMovieType,
        };

        let a = await axios.patch(`${process.env.REACT_APP_HOST}/mypage/userInfo`, useraddInfo,
            {
                headers: {
                    "Authorization": localStorage.getItem("Authorization"),   //accesstoken
                    "RefreshToken": localStorage.getItem("RefreshToken"),
                }
            });
        if (a.data.success) {
            alert('????????? ?????????????????????.');
            window.location.reload();
        }

        setInput(!input)
    }


    return (
        <Container>
            {!input ?
                <MypageBox>
                    {/* ????????? ?????? Myinfo */}
                    <Myinfo>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div>
                                <Profile src={userInfo?.imageUrl} />



                            </div>


                            <InfoBody>
                                <Age> AGE : {userInfo?.age}</Age>

                                <MBTI>MBTI : {userInfo?.mbti} </MBTI>

                                <Area>?????? ?????? : {userInfo?.area}</Area>
                                <OnlineBox>
                                    <OneLineTitle>??? ??? ??????</OneLineTitle>
                                    <OneLine>
                                        {userInfo?.introduction}
                                    </OneLine>
                                </OnlineBox>
                            </InfoBody>
                            {isClickEdit &&
                                <EditModal
                                    post={post}
                                    modalRef={modalRef} />
                            }
                            {isClickProfileEdit &&
                                <ProfileEditModal
                                    post={profile}
                                    modalRef={profilemodalRef} />
                            }
                        </div>
                        <BtnBox>
                            <ModifyBtn onClick={() => setIsClickProfileEdit(true)} >????????? ?????? ????????????</ModifyBtn>
                            <ModifyBtn onClick={() => setInput(!input)}>???????????? ????????????</ModifyBtn>
                            <ModifyBtn onClick={() => setIsClickEdit(true)}>???????????? ??????</ModifyBtn>
                        </BtnBox>

                    </Myinfo>
                    {/* ?????? ????????? ??? ?????? ?????????????????? ???????????? ?????? ?????? */}
                    <ListBox>
                        {/* ?????? ???????????? ?????? ?????? */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Listtitle>?????? ?????? Purple????</Listtitle>
                            <LovemeBox>
                                <LoveCard>
                                    {userInfo?.likedResponseDtoList?.map((likeMeitem) => {
                                        return <LikeMeCard key={likeMeitem.userId} likeMeitem={likeMeitem} />
                                    })}

                                </LoveCard>
                            </LovemeBox>
                        </div>

                        {/* ?????? ????????? ?????? ?????? ?????? */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Listtitle>????????? ?????? ?????? ????</Listtitle>

                            <MatchingBox>
                                <MatchingCard>
                                    {userInfo?.otherLikeResponseDtoList?.map((loveMeitem) => {
                                        return <LoveweCard key={loveMeitem.userId} loveMeitem={loveMeitem} />
                                    })}
                                </MatchingCard>
                            </MatchingBox>
                        </div>
                    </ListBox>


                </MypageBox>


                :
                // ???????????? ????????? ?????? ???????????? 

                <SecondMypageBox>
                    <SecondMyinfo>

                        <InfoBody>
                            <Age> age : 27 </Age>
                            <MBTI>MBTI : ENFP</MBTI>
                            <AreaInput
                                maxLength={8}
                                placeholder={userInfo.area}
                                onChange={(e) => {
                                    setArea(e.target.value);
                                }}
                            />
                            <StBodyInput
                                maxLength={20}
                                placeholder={userInfo.introduction}
                                onChange={(e) => {
                                    setIntroduction(e.target.value);
                                }}
                            />
                        </InfoBody>

                    </SecondMyinfo>

                    {/* ?????? ??????????????? ?????????  */}
                    <AddMyinfo>
                        <MiniHeader>??????? ????????? ???????????????, <br />???????????? ?????? ??? ????????? ???????????????.????</MiniHeader>
                        <MiniBox>
                            <MiniTitle>????????? ????</MiniTitle>
                            <MiniInput

                                placeholder={userInfo.idealType}
                                onChange={(e) => {
                                    setIdealType(e.target.value);
                                }}
                            />
                        </MiniBox>
                        <MiniBox>
                            <MiniTitle>?????? ????</MiniTitle>
                            <MiniInput
                                placeholder={userInfo.job}
                                onChange={(e) => {
                                    setJob(e.target.value);
                                }}
                            />
                        </MiniBox>
                        <MiniBox>
                            <MiniTitle>?????? ????</MiniTitle>
                            <MiniInput
                                placeholder={userInfo.hobby}
                                onChange={(e) => {
                                    setHobby(e.target.value);
                                }}
                            />
                        </MiniBox>
                        <MiniBox>
                            <MiniTitle>???????????? ?????? ????</MiniTitle>
                            <MiniInput
                                placeholder={userInfo.pet}
                                onChange={(e) => {
                                    setPet(e.target.value);
                                }}
                            />
                        </MiniBox>
                        <MiniBox>
                            <MiniTitle>?????? ?????? ????</MiniTitle>
                            <MiniInput
                                placeholder={userInfo.smoke}
                                onChange={(e) => {
                                    setSmoke(e.target.value);
                                }}
                            />
                        </MiniBox>
                        <MiniBox>
                            <MiniTitle>???????????? ????</MiniTitle>
                            <MiniInput
                                placeholder={userInfo.drink}
                                onChange={(e) => {
                                    setDrink(e.target.value);
                                }}
                            />
                        </MiniBox>
                        <MiniBox>
                            <MiniTitle>???????????? ?????? ????</MiniTitle>
                            <MiniInput
                                placeholder={userInfo.likeMovieType}
                                onChange={(e) => {
                                    setLikeMovieType(e.target.value);
                                }}
                            />
                        </MiniBox>

                    </AddMyinfo>
                    <BtnBox>
                        <StButton onClick={() => { onUpdatePost() }}>??????</StButton>
                        <StButton onClick={() => { setInput(!input) }}>??????</StButton>
                    </BtnBox>
                </SecondMypageBox>
            }
        </Container>
    );
}

export default Mypage;

