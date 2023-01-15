import styled from "styled-components";

export const PromoSubContainer = styled.div`
  background: var(--color-Three);
  flex: 1 0 100%;
  height: 20rem;
  color: var(--color-One);
  padding: 2% 20%;
  height:auto;
`;
export const PromoSubHead = styled.div`
  /* display: flex;
  flex: 1 0 50%; */
  font-size: 3rem;
  text-transform: capitalize;
  text-align: center;
  color:var(--color-One);
  font-family: 'Raleway';
  /* background: -webkit-linear-gradient(var(--color-Eight), var(--color-Two)); */
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */

  @media screen and (max-width: 800px) {
            font-size: 2rem;
        }
        @media screen and (max-width: 450px) {
            font-size: 1.5rem;
        }
`;
export const PromoSubBody = styled.div`
  display: flex;
  flex: 1 0 50%;
  font-size: 1.5rem;
  text-transform: capitalize;
  text-align: center;
  padding: 4% 15%;
  color: var(--color-Two);
  @media screen and (max-width: 800px) {
            font-size: 1rem;
        }
        @media screen and (max-width: 800px) {
            font-size: 0.8rem;
        }
`;
