import styled from "styled-components";

export const MissionContainer = styled.div`
  background-color: var(--color-Three);
  height: auto;
  display: flex;
  width: 100%;
  padding: 5% 4%;

  @media screen and (max-width: 800px) {
    display: grid; 
    padding: 15% 4%;
  }
  @media screen and (max-width: 500px) {
    display: grid; 
    padding: 20% 4%;
  }
  @media screen and (max-width: 300px) {
    display: grid; 
    padding: 25% 4%;
  }
`;
export const MissionLeft = styled.img`
  width: 100%;
  height: auto;
  display: flex;
  flex: 0 1 50%;
  @media screen and (max-width: 1400px) {
    width: 70%;
    height: auto;
    display: flex;
    flex: 0 1 50%;
    padding: 5% 2%;
  }
  @media screen and (max-width: 1300px) {
    width: 50%;
    height: 60%;
    display: flex;
    flex: 0 1 50%; 
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    display: flex;
    flex: 0 1 50%;
    padding: 5% 2%;
  }
`;
export const missionImage = styled.img``;

export const MissonRight = styled.div`
  flex: 1 0 50%;
  width: 100%;
  color: var(--color-One);
  padding: 5% 2%;
`;
export const MissionHead = styled.div`
  text-transform: uppercase;
  font-size: 2.5rem;
  padding: 3% 0%;
  font-family: 'Raleway';
  font-weight:700;

  @media screen and (max-width: 1300px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const MissionBody = styled.div`
  font-size: 1.5rem;
  padding: 4% 0%;
  font-family: 'Raleway';
  color: var(--color-One);
  letter-spacing: 0.5px;
  line-height: 160%;
`;
export const MissionButtons = styled.div`
  width: 40%;
  color: #ece9e6;
  font-size: 50px;
  position: absolute;
  text-align: left;
  z-index: 10;
  font-weight: 500;
  display: flex;
`;
