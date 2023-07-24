import { styled } from "styled-components";

export const Input = styled.input`
    background-color: ${(props)=> props.theme.inpBg};
    border-radius: 3px;
    border:none;
    border-bottom:1px solid;
    border-bottom-color: ${(props)=> props.theme.inpBColor};
    width: 100%;
    width: ${(props)=> props.width};
    height: 50px;
    color: ${(props)=> props.theme.color};
    outline: none;
    font-size: medium;
    padding: 10px;
    &:hover{
      height: 55px;
      /* box-shadow: 1px 1px 1px 1px ; */
      border-bottom:3px solid red;
      transition: all 0.5s ;
    }
    &:focus{
      font-weight: bold;
      height: 55px;
      border-bottom:3px solid red;
      transition: all 1s ease;
      &::-webkit-input-placeholder{
        color: #ff0000c9;
        font-size: medium;
        transition: all 0.5S ;
    }
    }
    &::-webkit-input-placeholder{
        color: ${(props)=> props.theme.color};
        
    }
`;

export const Btn = styled.button`
    background-color: ${(props)=> props.theme.BBg};
    border-radius: 10px;
    width: 100%;
    height: 50px;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    display: flex;
    border: none;
    &:hover{
      height: 53px;
      box-shadow: 5px 5px 5px ${(props)=> props.theme.BBg + 'a2'};
      background-color: ${(props)=> props.theme.BBg + 'd6'};
      transition: all 0.5s ;
    }
`;

export const AddDiv = styled.div`
    align-self: center;
    width: 60%;
    height: 66%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 7px;
    overflow-y: auto;
    overflow-X: hidden;
    @media (max-width: 550px) {
     width:100% ;
    }
`;
export const DivAll = styled.div`
    width: 60%;
    height: 720px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    background-color: ${(props) => props.theme.ABg};
    margin-top:-20px ;
    padding-top: 10px;
    @media (max-width: 1200px) {
        width: 80%;  
    }
    @media (max-width: 700px) {
        width: 90%;  
    }
    @media (max-width: 500px) {
        width: 100%;
        border-radius  :0 ;
    }
`;
export const BtnDiv = styled.div`
    background-color: ${(props)=> props.theme.BDBg};
    width: 100%;
`;
export const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    background-color: ${(props)=> props.theme.BgA};
    align-items: center;
    justify-content: center;
`;
export const DivListCard = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;  
`;
export const DivCard = styled.div`
  position: relative;
  height: 190px;
  background-size: cover;
  padding: 25px;
  border-radius: 28px;
  min-width: 350px;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  resize: none;
  color:${props=>props.theme.CC};   
  background-color: ${props=>props.theme.CBg} ;
  @media (max-width:350px) {
     min-width: 260px;
     margin-left: 3px;
     margin-right: 3px;
  }
`;
export const DivImg = styled.div`
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: start;
`;
export const DivData = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;