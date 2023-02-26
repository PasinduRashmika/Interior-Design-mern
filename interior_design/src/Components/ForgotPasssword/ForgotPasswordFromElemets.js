import styled from "styled-components";


export const Container = styled.div`
    width:50% ;
    min-height:50vh ;
    background-color: var(--color-Three);
    margin:10% auto ;
    padding: 1%;
    display:flex ;
    flex-direction:column ;
    border: 1px solid #ac6a2a ;
border-radius:30px ;
    @media screen and (max-width: 800px) {
        margin-top: 32%;
        width:80% ;
    }

`
export const H1 = styled.h1`
        text-align: center;
        font-size: 2rem;
        color: #ac6a2a;
        letter-spacing:8px;
        font-weight: bold;
        position: relative;
        left: 0;
        display: inline;
        color: #49483E;
        font-family: "Lato", sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        background: linear-gradient(90deg, #ac6a2a 0%, #e2a669 100%);
        -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
        ${'' /* background-image: linear-gradient(
        to right,
        #339BFF5d,
        #339BFF
        );
        transition: all 0.2s;
        -webkit-background-clip: text; */}
         @media screen and (max-width:800px){
            font-size: 1.2rem; 
        }
    `

export const Form = styled.form`
    width: 100% ;
    display:flex ;
    justify-content:center ;
    background-color: var(--color-Three);
`;

export const FormGroup = styled.div`
    width:50% ;
    display:flex ;
    flex-direction:column ;
    align-items:flex-start ;
    margin:1rem 0 ;
    @media screen and (max-width: 800px) {
        width:80% ;
    }
`

export const Label = styled.label`
    color:#ac6a2a ;
    margin:1rem 0 ;
`