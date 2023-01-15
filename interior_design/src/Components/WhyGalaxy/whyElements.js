import styled from "styled-components";

export const WhyContainer = styled.div`
        background-color: var(--color-Three);
        display: block;
        height: auto;
        padding: 2rem 10rem;
        z-index: 2;
    `;

export const WhySec = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const WhyBody = styled.div`
        flex-basis: 100%;
        margin:3% 0;
        width: 100%;
        font-family: 'Raleway';
    `;
export const WhySubSec = styled.div`
  margin: 2%;
  width: 30%;
  text-align: center;
  @media screen and (max-width: 800px) {
    margin: 0 5%;
  }
`;

export const WhyH2 = styled.h2`
  margin: 0px 10px 20px 10px;
  font-size: 5rem;
  font-family: "Raleway", sans-serif;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const WhyP = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  height:auto;
  color: var(--color-Eight);
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Raleway";

  pre{
    font-family: "Raleway";
  }
  @media screen and (max-width: 800px) {
    font-size: 0.8rempx;
    letter-spacing: 3px;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.5rem;
    letter-spacing: 1.5px;
  }
`;

export const WhyCount = styled.div`
  color:var(--color-One);
  letter-spacing: 2%;
  font-family: "Montserrat", sans-serif;
  font-size: 3.5rem;
  @media screen and (max-width: 800px) {
    font-size: 2 rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1 rem;
  }
  @media screen and (max-width: 300px) {
    font-size: 0.5rem;
  }
`;
export const EventCounteFooter = styled.div`
  display: flex;
  flex: 0 1 50%;
  @media screen and (max-width: 1200px) {
    display: flex;
    flex: 0 1 50%;
    justify-content: center;
    display: grid;
  }
`;
export const EventCounteFooterColOne = styled.div``;
export const EventCounteFooterColOneBody = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;
export const FooterSetOne = styled.div`
  color: var(--color-purpleFour);
`;
export const FooterSetTwo = styled.div``;
export const FooterSetThree = styled.div`
  color: var(--color-purpleFour);
`;
export const FooterSetFour = styled.div``;
export const FooterSetPara = styled.div`
  font-size: 2rem;
`;
export const EventCounteFooterColTwo = styled.div`
  display: flex;
  flex: 0 1 30%;
  justify-content: center;
`;
export const WhyHead = styled.div`
  display: flex;
  color:var(--color-One);
  font-size:3.5rem;
  padding:2rem 0;
  justify-content: center;

  @media screen and (max-width: 800px) {
    font-size:2.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size:2rem;
  }
  @media screen and (max-width: 350px) {
    font-size:1.5rem;
  }

  pre{
    color:var(--color-Eight);
    font-size:3.5rem;

    @media screen and (max-width: 800px) {
    font-size:2.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size:2rem;
  }
  @media screen and (max-width: 350px) {
    font-size:1.5rem;
  }
  }

`;