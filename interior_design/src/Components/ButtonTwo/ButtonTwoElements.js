import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Container =styled.div`
   
  button {
    background-color: transparent;
    width: 15rem;
    height: 4rem;
    font-size:1rem ;
    letter-spacing: 0.2rem;
    color: var(--color-white);
    font-family: 'Raleway', sans-serif;
    text-transform:uppercase ;
    margin: 0 30%;
    transition:color 0.4s linear;
    border:1px solid var(--color-One);

    &:hover{
      transition: all 0.5s ease-in;
      cursor: pointer;
      font-size:1.1rem ;
      border:1px solid var(--color-One);
      background-color: var(--color-Eight);

    }

    @media screen and (max-width: 500px) {
      width: 10rem;
      height: 3rem;
      font-size:0.5rem ;
      letter-spacing: 0.1rem;
  
  }
}
`;