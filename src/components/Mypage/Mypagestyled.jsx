import styled from "styled-components";

//마이페이지 큰박스
export const MypageBox = styled.div`
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    width:380px;
    height: auto;
    margin-top: 90px;
    margin-bottom: 75px;
    padding-bottom: 2vh;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid #fdc2f0;
    border-radius: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

//마이페이지 내정보박스 
export const Myinfo = styled.div`
    border-bottom-style:solid; 
    border-bottom-color:gray;
    border-bottom-width:2px;
    width: 350px;
    /* margin-left: 25vw; */
    margin-top: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 2%;
`

//마이페이지 프로필 사진
export const Profile = styled.img`
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    width: 130px;
    height: 130px; 
    border-radius: 70%;
    overflow: hidden;
    margin-top: 20px;
    justify-content: start;
`

//내정보 박스 
export const InfoBody = styled.div`
    margin-bottom: auto;
    margin-left: 10px;
    text-align: center;
    height: 180px;
`

//나이 박스
export const Age = styled.div`
    text-align: center;
    font-size: 14px;
    padding: 2%;
    /* width: 180px; */
    margin-left: 12px;
`

//MBTI 박스
export const MBTI = styled.div`
    text-align: center;
    padding: 2%;
    font-size: 14px;
    /* width: 180px; */
    margin-left: 12px;
    
`

//지역박스
export const Area = styled.div`
    text-align: center;
    padding: 4%;
    font-size: 14px;
    width: 200px;
    margin-left: 12px;
`

//한줄평 안은 박스
export const OnlineBox = styled.div`
  margin: 3%;
  padding-bottom: 2%;
  border: 2px solid purple;
  width: 200px;
`

//한줄평 제목
export const OneLineTitle = styled.div`
    padding: 3%;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    justify-content: center;
    
`

//한줄평 바디
export const OneLine = styled.div` 
    font-size:14px;
    margin-top: 5px;
    margin: auto;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    word-break: keep-all;
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis; 
    /* white-space: nowrap; */
    white-space: pre-wrap;
    word-break:break-all;

    
`
//버튼 박스
export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap:10px;

`

//수정버튼
export const ModifyBtn = styled.button`
    font-size: 12px;
    word-break: keep-all;
    cursor: pointer;
    height: 44px;
    padding: 1%;
    background-color: white;
    border: 2px solid #d87dd8;
    :hover{
        background-color: #d87dd8;
        border: 2px solid #d87dd8;
    }
`

//리스트 전체 박스
export const ListBox = styled.div`
  display: flex;
  margin-top: 10px;
  height: auto;
  width: 380px;
  justify-content: center;
`

//리스트 박스 타이틀
export const Listtitle = styled.div`
    display: flex;
    width: 150px;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 600;
    margin-left: 10px;
`

//나를 좋아요한 사람 목록박스
export const LovemeBox = styled.div`
  margin: 0px auto;
  display: grid;
  /* align-items: center; */
  justify-content: center;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 5%;
  grid-row-gap: 5%;
 
`


//좋아요한 사람 프로필 사진 
export const LoveCard = styled.div`
    margin: auto;
    margin-right: 30px;
    /* margin-left: 2vw; */
    /* background-color: #8adafd; */
    border: 2px solid #9C7FCB;
    border-radius: 10px;
    padding : 1%;
    width: 160px;
    height:auto;
    text-align: center;
    padding-top: 10px;
`

//매칭된 사람 목록 박스
export const MatchingBox = styled.div`
  margin: 0px auto;
  display: grid;
  /* align-items: center; */
  justify-content: center;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 5%;
  grid-row-gap: 5%;
`

//매칭된 사람 프로필 사진
export const MatchingCard = styled.div`
    margin: auto;
    /* margin-left: 10px; */
    /* background-color: #8adafd; */
    border: 2px solid #cb7fb8;
    border-radius: 10px;
    padding : 1%;
    width: 160px;
    height:auto;
    text-align: center;
    padding-top: 10px;
`





//----------------------수정스타일링------------------------------


//수정 인풋창
export const StBodyInput = styled.textarea`
  margin-top: 1%;
  border: 2px solid #f797f7;
  /* border-radius: 5px; */
  font-size: 12px; 
  padding:1%;
  width: 200px;
  height: 60px;
  word-break: keep-all;
  :hover{
    border: 2px solid #f797f7;
  }
  &:focus {
      outline: none;
      border: 2px solid gray;
    }
`

export const AreaInput = styled.input`
  margin-top: 1%;
  border: 2px solid #f797f7;
  /* border-radius: 5px; */
  font-size: 12px; 
  padding:1%;
  width: 200px;
  :hover{
    border: 2px solid #f797f7;
  }
  &:focus {
      outline: none;
      border: 2px solid gray;
    }
`


//완료버튼창 박스
export const StBtbBox = styled.div`
  height: 50px;
  display: flex;
  justify-content:center;
  width : 200px;
`

//수정 완료버튼창
export const StButton = styled.button`
  height: 30px;
  width: 100px;
  font-size: 14px;
  margin-left: 15px;
  border: 2px solid purple;
  font-weight: 600;
  background-color: white;
  cursor: pointer;
  :hover{
    color : #f56589;
    background-color: #ffffae;
    border : none;
  }
`

//수정큰틀
export const SecondMypageBox = styled.div`
    width:380px;
    height: auto;
    margin-top: 85px;
    margin-bottom: 70px;
    padding-bottom: 5vh;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid #fdc2f0;
    border-radius: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

//수정 마이페이지틀
export const SecondMyinfo = styled.div`
    border-bottom-style:solid; 
    border-bottom-color:gray;
    border-bottom-width:2px;
    width: 350px;
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: center;  
`


//수정 사진틀
export const ImgBox = styled.div`
  display  : flex ;
  justify-content: center;
  margin-top: 2vw;
`;

//이미지 input
export const Avatar = styled.img`
    border: 2px solid #f8b2f8;
    border-radius: 100px;
    width: 100px;
    height: 100px;
    background-size: cover;
`



//마이페이지 추가 정보란 제일큰박스
export const AddMyinfo = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

//마이페이지 추가 정보란 낱개박스
export const MiniBox = styled.div`
  height : 60px;
  margin : auto;
`
//마이페이지 낱개 박스 타이틀
export const MiniTitle = styled.div`
  margin: auto;
  width: 150px;
  height: 20px;
  text-align: center;
  background-color: #bebaba;
  border-radius: 5px;
  font-size: 14px;
`

//마이페이지 낱개 박스 인풋
export const MiniInput = styled.input`
  margin-top: 1%;
  text-align: center;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  height: 1.5em;
  border-radius: 5px;
  border: 2px solid gray;
  font-size: 12px;
`



//마이페이지 추가정보란 헤더
export const MiniHeader = styled.div`
  border-radius: 5px;
  padding: 1%;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  color: purple;
  width: 100vw;
  margin-top: 10px;
  margin-bottom: 15px;
`
//기본 인포 바디 
export const InfoBodyBox = styled.div`
display: flex;
flex-direction: column;
`
//나이 인풋창
export const AgeInput = styled.input`
  margin  : auto ;
  margin-top: 10px;
  height: 35px;
  width: 180px;
  font-size: 12px;
  word-break: keep-all;
  border: none;
  border-bottom:2px solid #f797f7;
  &:focus {
      outline: none;
      border-bottom: 2px solid gray;
    }
    text-align: center;
`

//엠비티아이 드롭다운옵션
export const MBTIInput = styled.option`
  display: flex;
  
`
//엠비티아이 옵션 헤드
export const StSelect = styled.select`
  color: #797979;
  width: 180px;
  height: 30px;
  border: none;
  border-bottom:2px solid #f797f7;
  padding-left: 5px;
  display: flex;
  margin  : auto ;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 12px;
  &:focus {
      outline: none;
      border-bottom: 2px solid gray;
    }
    
`
export const Container = styled.div`
  max-width: 428px;
  width : 100%;
  margin:0 auto;
  height: 100vh;
  background-color: white;
  overflow-y: auto;
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

  //아이폰 화면크기
  @media all and (max-width : 390px) {
   max-width : 390px;
   }
`