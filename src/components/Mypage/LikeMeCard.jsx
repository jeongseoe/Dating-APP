import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const LikeMeCard = ({ likeMeitem }) => {
    const navigate = useNavigate();
    // key=1 post=json{}, props에 들어가잇음
    return (
        <>
            <Item onClick={() => { navigate(`/profileInfo/${likeMeitem?.userId}`) }}>
                <Image src={likeMeitem?.imageUrl} alt="" />
            </Item>
        </>
    );
};

export default LikeMeCard;

const Item = styled.div`
    border: 2px solid #9C7FCB;
    border-radius: 5px;
    width: 140px;
    height: 140px;
    box-shadow:5px 5px 5px grey;
    box-sizing: inherit;
    margin: auto;
    margin-bottom: 15px;
`

const Image = styled.img` 
    width: 100%;
    height: 100%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    /* filter: blur(10px); */
`
