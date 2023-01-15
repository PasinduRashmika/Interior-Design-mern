import styled from "styled-components";

export const ProductContainer = styled.div`
  background-color: var(--color-Three);
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5% 7%;
`;
export const ProductTitle = styled.div`
  text-transform: uppercase;
  width: 100%;
  display: flex;
  background-color: var(--color-Three);
  text-align: center;
  color: var(--color-One);
  padding: 2% 0;
`;
export const Title = styled.div`
  text-transform: uppercase;
  background-color: var(--color-Three);
  background: -webkit-linear-gradient(var(--color-Eight), var(--color-One));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  text-align: left;
  padding: 0 5%;
  font-family: sans-serif;
  letter-spacing: 0.3rem;
`;
export const TitleHR = styled.div`
  display: flex;
  flex: 0 1 90%;
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
    width: 90%;
    margin: 0 0;
    @media screen and (max-width: 680px) {
      display: none;
    }
  }
`;

export const ProductSecondRow = styled.div`
  margin: 0 0;
  color: var(--color-grey);
  margin-bottom: -2%;
`;
export const ProductCards = styled.div`
  width: 20%;
  height: auto;
  /* border-left: 3px solid var(--color-grey); */
  /* border-right: 3px solid #FFF; */
  /* border-radius: 20px; */
`;
export const ProductImg = styled.div`
  img {
    width: 100%;
    height: 25rem;
    padding: 0 5%;
    align-items: center;
    justify-content: center;
    background-color: var(--color-Three);
  }
`;
export const ProducCardtTitle = styled.div`
  p {
    text-align: center;
    color: #eee;
    font-size: 20px;
  }
`;
