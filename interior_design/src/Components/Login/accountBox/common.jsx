import styled from "styled-components";

export const BoxContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

export const FormContainer = styled.form`
  width: 100%;
  z-index:999;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 1.2rem;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 1.2rem;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 0.4rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 4.2rem;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius:2rem;
  padding: 0px 1rem;
  /* border-bottom: 1.4px solid transparent; */
  transition: all 200ms ease-in-out;
  font-size: 1.2rem;
  background-color: transparent;
  margin-bottom:5%;
  color:var(--color-One);

  &::placeholder {
    color:var(--color-One);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;
