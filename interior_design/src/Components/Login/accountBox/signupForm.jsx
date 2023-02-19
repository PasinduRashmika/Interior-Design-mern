import React, { useContext, useState, useEffect } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";
import AuthContext from "../../../context/auth/authContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const authContext = useContext(AuthContext);

  const { register } = authContext;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const details = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    if(name==='' || email==='' || password=== '' ||passwordConfirm === ''){
      console.log("PLZ enter fields");
    }else if(password!==passwordConfirm){
      console.log("Password do not match");
    }else{
      register({
        name,
        email,
        password
      });
    }
    console.log(details);

    axios
      .post("http://localhost:3000/api/v1/users/signup", details)
      .then((res) => console.log(res.data));


      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
  };

  return (
    <BoxContainer onSubmit={onSubmit}>
      
      <FormContainer >
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="/login" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
