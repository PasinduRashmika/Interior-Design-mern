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
import axios from "axios";
import { AccountContext } from "./accountContext";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component';
import { useHistory } from 'react-router-dom'

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code,setCode]=useState('');

  const history = useHistory();
  const onSubmit =async (e) => {
    e.preventDefault();
    const details = {
      email: email,
      password:password
    };

    

    try{
      const res= await axios.post("http://localhost:3000/api/v1/users/login", details);
      console.log(res.data);
      setCode(res.status);
      
      Store.addNotification({
        title: "Login Success!",  //https://www.npmjs.com/package/react-notifications-component
        message: "",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });

      

      
    }catch(e){
        const res=e.response.data.message;
        Store.addNotification({
          title: "Login Failed!",  //https://www.npmjs.com/package/react-notifications-component
          message: res,
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
    }
      // setEmail('');
      // setPassword('');
  };

  useEffect(() => {
    console.log('code :'+code);
    if (code===200) {
      
      history("/admin/dashboard");
    }
  }, [code]);

  return (
    <BoxContainer onSubmit ={onSubmit}>
      <ReactNotifications />
      <FormContainer>
        <Input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
