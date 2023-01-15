import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Container =styled.div`
   
  button {
    background-color: var(--color-Eight);
    width: 15rem;
    height: 4rem;
    font-size:1rem ;
    letter-spacing: 0.2rem;
    color: var(--color-One);
    font-family: "Raleway";
    text-transform:uppercase ;
    border:none;
    &:hover{
      transition: all 0.5s ease-in;
      cursor: pointer;
      font-size:1.06rem ;
      border:2px solid var(--color-One);
      background-color: transparent;
      /* transform:scale(1.05) ; */
    }

    @media screen and (max-width: 550px) {
      width: 10rem;
      height: 3rem;
      font-size:0.5rem ;
      letter-spacing: 0.1rem;
  
    }
  }
`;