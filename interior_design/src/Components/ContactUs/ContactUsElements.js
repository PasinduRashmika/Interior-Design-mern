import styled from "styled-components";
import { ContactUsContactUsContainer as Contact } from "react-router-dom";


export const ContactUsContainer = styled.div`
    background: var(--color-Three);
    background-repeat: no-repeat;
    background-size: cover;
  width: 100%;
  height: 850px;
  margin: 20px;
  margin-bottom: 0px;
  margin-top: 0px;
`;
export const ContactUsHeader = styled.div`
  font-size: 35px;
  font-style: italic;
  font-weight: 600;
  color: #da9100;
  margin-left: 150px;
  padding-top:150px;
`;
export const ContactUsBody = styled.div`
  display: flex-block;
  align-items: center;
  justify-content: center;
  width: auto;
`;
export const ContactUsFirstRow = styled.div`
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 100%;
  display: flex;
`;
export const ContactUsInput = styled.div`
  align-items: center;
  justify-content: center;
  padding: 15px;
  .input {
    height: 50px;
    width: 400px;
    background: none;
    border: 2px #36454f solid;
    color: #ccc;
    font-size: 18px;
    padding: 20px;
  }
  .input:focus {
    outline: #da9100;
    border: 3px #da9100 solid;
    transition: all 0.5s ease;
    background: none;
  }
  .input:hover {
    border: 1px #da9100 solid;
    transition: all 0.5s ease;
  }
  .input::placeholder {
    font-size: 15px;
    padding-left: 10px;
    color:#ccc
  }
`;
export const ContactUsSecondRow = styled.div`
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 100%;
  display: flex;
`;
export const ContactUsTextArea = styled.div`
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 1300px;
  .textarea {
    height: 175px;
    width: 100%;
    background: none;
    color: #ccc;
    font-size: 18px;
    padding :20px;
  }
  .textarea::placeholder {
    font-size: 18px;
    padding-left: 20px;
    color: #ccc;
  }
  .textarea:hover {
    border: 1px #da9100 solid;
    transition: all 0.5s ease;
  }
  .textarea:focus {
    outline: #da9100;
    border: 3px #da9100 solid;
    transition: all 0.5s ease;
    background: none;
  }
`;
export const ContactUsSubmit = styled.div`
  justify-content: center;
  align-items: center;
  
  .submit{
      justify-content: center;
      align-items: center;
      width: 140px;
      height: 40px;
      margin: 0 auto;
      display: block;
      font-size: 15px;
      background: none;
      color: #fff;
      border-radius: 20px;
      border: 1px #da9100 solid;
  }
  .submit:hover{
      background: #da9100;
      color:#fff;
      transition: all 0.8s;
  }
`;