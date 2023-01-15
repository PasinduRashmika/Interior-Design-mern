import styled from "styled-components";


export const SubNavContainer = styled.nav`
  height: 50px;
  width:100%;
  background-color: var(--color-Three);
  display: flex;
`;
export const SubLeft = styled.nav`
  width:50%;
  display: flex;
  flex: 1 0 33%;
`;
export const SubMid = styled.nav`
  width:50%;
  display: flex;
  flex: 1 0 33%;
`;
export const SubRight = styled.nav`
  width:50%;
  display: flex;
  flex: 1 0 33%;
`;
export const SubLink = styled.nav`
  color:var(--color-One);
  width:100% ;
  text-align:center;
  font-size:1.3rem;
  padding-top:5%;

  @media screen and (max-width: 700px) {
    font-size:1.1rem;
  }
  @media screen and (max-width: 450px) {
    font-size:0.8rem;
  }
`;
export const SubLinkLog = styled.nav`
  color:var(--color-One);
  width:100% ;
  text-align:center;
  font-size:1.5rem;
  padding-top:5%;
  color: var(--color-Ten);

  @media screen and (max-width: 700px) {
    font-size:1.1rem;
  }
  @media screen and (max-width: 450px) {
    font-size:0.8rem;
  }
`;