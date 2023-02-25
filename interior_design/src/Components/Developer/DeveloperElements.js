import styled from "styled-components";

export const AboutcsscContainer = styled.div`
  height: auto;
  width: auto;
  padding: 3% 10%;
  background-color: var(--color-Three);
`;
export const CsscHeading = styled.div`
  text-align: center;
  height: auto;
  padding: 5% 2%;
  font-family: "Raleway", sans-serif;
  h1 {
    text-transform: uppercase;
    color: #000;
    font-size: 3rem;
    text-align: center;
    font-family: "Raleway";
    letter-spacing: 0.3rem;
    font-weight: 800;
    color: var(--color-Eight);
    @media screen and (max-width: 800px) {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.5rem;
  }
`;
export const CsscThings = styled.div`
  display: flex;
  width: auto;
  flex: 1 0 100%;

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
    display: grid;
  }
`;


export const CsscImg1 = styled.div`
  background-color: var(--color-Three);
  width: 100%;
  height: auto;
  border-left: 2px solid var(--color-purpleOne);
  will-change: transform;
  transition: transform 450ms;
  transition: 0.5s;
  img {
    width: 100%;
    height: auto;
    display: flex;
    flex: 0 1 50%;
    opacity: 0.8;
    border-radius: 5%;
    will-change: transform;
    transition: transform 450ms;
    transition: 0.5s;

    &:hover {
      opacity: 1;
      transition: transform 600ms;
      transform: scale(1.054);
      cursor:pointer;
    }
  }
`;
export const CsscImg2 = styled.div`
  width: 100%;
  height: auto;
  padding: 15% 5%;

  @media screen and (max-width: 1200px) {
    padding: 2% 5%;
  }
  @media screen and (max-width: 900px) {
    padding: 0% 5%;
  }
`;
export const CsscSub = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  font-family: "Raleway", sans-serif;
  padding: 1em;
  font-weight: 600;
  color: var(--color-Eight);
  @media screen and (max-width: 1100px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.75rem;
  }
`;
export  const Name=styled.div`
     color: var(--color-One);
     font-size: 1.8rem;

     @media screen and (max-width: 950px) {
    font-size: 1.5rem;
  }
`;
export  const Carrer=styled.div`
     color: var(--color-One);
     font-size: 1.3rem;
     padding:2% 0;

     @media screen and (max-width: 950px) {
    font-size: 1rem;
  }
`;
export  const Degree=styled.div`
     color: var(--color-One);
     font-size: 1.3rem;
     padding:2% 0;

     @media screen and (max-width: 950px) {
    font-size: 1rem;
  }
`;
export  const Uni=styled.div`
     color: var(--color-One);
     font-size: 1.3rem;
     padding:2% 0;

     @media screen and (max-width: 950px) {
    font-size: 1rem;
  }
`;
export  const Social=styled.div`
     color: var(--color-One);
     padding:2% 0;
     font-size: 1.3rem;
     display: grid;

     span{
      padding:2% 1%;
      display:flex;

      @media screen and (max-width: 950px) {
    font-size: 0.5rem;
  }
     }
`;
export  const SociaLinks=styled.div`
     color: var(--color-One);
     font-size: 1.3rem;
     padding:1.5% 2%;
`