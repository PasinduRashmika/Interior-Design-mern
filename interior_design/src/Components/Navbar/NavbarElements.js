import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "8rem")};
  background-color: var(--color-Three);
  display: flex;
  flex-direction: column;
`;
export const LeftContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: center;
  background-color: var(--color-Three);
  

  @media screen and (max-width: 700px) {
    flex: 40%;
    display: flex;
    align-items: center;
    background-color: var(--color-Three);
  }
`;
export const RightContainer = styled.div`
  flex: 40%;
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
  background-color: var(--color-Three);

  @media screen and (max-width: 700px) {
    flex: 60%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5rem;
  background-color: var(--color-Three);
  }
`;
export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
`;
export const NavbarLink = styled(Link)`
  color: var(--color-One);
  text-decoration: none;
  margin: 2rem;
  font-size: 1.5rem;
  text-transform: uppercase;

  &:hover{
    color: var(--color-Eight);
    transition: all 0.5s ease-out;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    margin: 1.5rem;
  }
  @media screen and (max-width: 950px) {
    font-size: 1rem;
    margin: 1.25rem;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const Logo = styled.img`
  margin: 0.3rem;
  max-width: 100%;
  height: auto;

  @media screen and (max-width: 700px) {
    /* margin: 0.3rem; */
  max-width: 100%;
  height: 80%;
  }
  @media screen and (max-width: 5500px) {
  max-width: 100%;
  height: 100%;
  }
  @media screen and (max-width: 450px) {
  max-width: 100%;
  height: 75%;
  }
`;
export const OpenLinksButton = styled.button`
  width: 7rem;
  height: 5rem;
  background: none;
  border: none;
  color: var(--color-One);
  font-size: 4.5rem;
  cursor: pointer;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;
export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  color: var(--color-One);
  text-decoration: none;
  margin: 2rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 1rem;
`;
