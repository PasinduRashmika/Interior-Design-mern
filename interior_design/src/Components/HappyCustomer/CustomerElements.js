import styled from "styled-components";

export const CustomerContainer = styled.div`
 background-color: var(--color-Three);
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
    padding: 5% 7%;
`;
export const CustomerTitle = styled.div`
  text-transform: uppercase;
  font-size:2rem;
  text-align: center;
  color: #fff;
  display:flex;
`;
export const CustomerSecondRow = styled.div`
    margin:0 5%;
`;
export const CustomerCards = styled.div`
  width: 20%;
  height: auto;
    margin:5% 0;
`;
export const CustomerQuote = styled.div`
  color: var(--color-One);
  font-size:2rem;
  padding:0% 20%;
  font-family: 'Raleway', sans-serif;
  color:var(--color-One);

  &:hover{
    color: var(--color-Eight);
    transition: all 0.5s ease-out;
  }


  @media screen and (max-width: 1050px) {
    font-size: 1.2rem;
    }
`;
export const Title = styled.div`
  text-transform: uppercase;
  background-color: var(--color-Three);
  background: -webkit-linear-gradient(var(--color-Eight), var(--color-One));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  text-align: left;
  padding: 0 5%;
  font-family:  sans-serif;
  letter-spacing: 0.3rem;

  @media screen and (max-width: 1520px) {
    font-size: 2rem;
    }
    @media screen and (max-width: 1275px) {
    font-size: 1.5rem;
    }
    @media screen and (max-width: 1050px) {
    font-size: 1.2rem;
    }
    @media screen and (max-width: 675px) {
        text-align: center;
    }
`;
export const TitleHR = styled.div`
  display: flex;
  flex: 0 1 70%;
  align-items: center;
  justify-content: center;

  hr {
    background: linear-gradient(
      to right,
      var(--color-Three),
      var(--color-Eight)
    );
    height: 5px;
    border: none;
    width: 100%;
    margin: 0 0;
    @media screen and (max-width: 680px) {
      display: none;
    }
  }
  @media screen and (max-width: 680px) {
      display: none;
    }
`;
