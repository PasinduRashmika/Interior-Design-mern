import styled from "styled-components";

export const ServiceContainer = styled.div`
  padding: 5% 5%;
  background: var(--color-Three);
  color: var(--color-Nine);
  width: 100%;
  height: auto;
  flex: 1 0 100%;
`;
export const ServiceCard = styled.div`
  background: var(--color-One);
  flex: 0 1 80%;
  min-height: 30vh;
  display: flex;
  min-width: 10vh;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  will-change: transform;
  transition: transform 450ms;
  padding: 1.5% 2%;
  margin: 2% 2%;

  &:hover {
    box-shadow: 0px 5px 20px 3px var(--color-Eight);
    transition: all 0.4s ease-in-out;  */
        transition: transform 500ms;
  }
`;
export const ServiceBodyOne = styled.div`
  width: 100%;
  display: flex;
`;
export const ServiceImg = styled.img`
  width: 30%;
  height: 30%;
  padding:1% 1%;
  margin:3% 0;

  @media screen and (max-width: 750px) {
    width: 20%;
  height: 20%;
  }
  @media screen and (max-width: 450px) {
    width: 15%;
  height: 15%;
  }
`;
export const ServiceInfo = styled.div`

`;
export const ServiceTitle = styled.div`
    margin:3% 0;
    font-size:2rem;
    font-weight:700;
    color: var(--color-Three);
  font-family: 'Raleway';
  will-change: transform;
transition: transform 450ms;

  &:hover {
    color: var(--color-Eight)
  }
  
    @media screen and (max-width: 450px) {
      font-size:1.5rem;
      transition: all 0.4s ease-in-out;  */
        transition: transform 500ms;
  }
`;
export const ServiceDesc = styled.div`
    margin:3% 0;
    font-size:1.3rem;
    color: var(--color-Five);
    font-family: 'Raleway';
    @media screen and (max-width: 750px) {
      font-size:1rem;
  }
`;
export const ServiceHead = styled.div`

`;
export const ServiceHeadTitle = styled.div`

`;
export const ServiceHeadDes = styled.div`
    
`;



export const ServiceCardOne = styled.div`
  background: var(--color-Three);
  color: var(--color-One);
  flex: 0 1 80%;
  min-height: 30vh;
  display: flex;
  min-width: 10vh;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  will-change: transform;
transition: transform 450ms;
  padding: 1.5% 2%;
  margin: 2% 2%;

  &:hover {
    box-shadow: 0px 5px 20px 5px var(--color-Eight);
    transition: all 0.4s ease-in-out;  */
        transition: transform 500ms;
  }
`;
export const ServiceImgOne = styled.img`
  display: none;
`;
export const ServiceInfoOne = styled.div`

`;
export const ServiceTitleOne = styled.div`
    font-family: 'Raleway';
    font-size:4rem;
    font-weight:700;
    color: var(--color-One);
   
    @media screen and (max-width: 750px) {
      font-size:3rem;
  }
  @media screen and (max-width: 450px) {
      font-size:2rem;
  }
`;
export const ServiceDescOne = styled.div`
    margin:3% 0;
    font-size:1.3rem;
    color: var(--color-One);
    margin-bottom:15%;
  font-family: 'Raleway';
    @media screen and (max-width: 750px) {
      font-size:1rem;
  }
`;
