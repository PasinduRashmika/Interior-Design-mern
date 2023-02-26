import React, { useState } from 'react'
import { Container,H1,Form, FormGroup, Label } from './ForgotPasswordFromElemets'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
// import { makeStyles } from "@material-ui/core/styles";
// import useAlert from './../../Hooks/useAlert';
// import ClipLoader from "react-spinners/ClipLoader";
// import * as A from './../../Components/alert/Alert_Types'


// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiFilledInput-root": {
//       background: "rgb(232, 241, 250)"
//     }
//   }
// }));

const ForgotPasswordForm = () => {

    const [email, setEmail] = useState('');
    // const { setAlert } = useAlert();

    const [pending, setPending] = useState(false);

    // const classes = useStyles();

    const onSubmit = async(e) => {
        e.preventDefault();
        setPending(true)
        console.log(email);
        try {
            const res = await axios.post('http://localhost:3000/api/v1/users/forgotPassword/',{email});
            console.log(res.data);
            if (res.data.status === 'success') {
                // setAlert(`${res.data.message} 👍`, A.SUCCESS, 5000);
                console.log(res.data.message);
            }
            setPending(false)
            setEmail('');

        } catch (err) {
            console.log(err.response.data);
            // show alert error
            // setAlert(`${err?.response.data.message} 🙄🤨`, A.ERROR, 5000);
            setPending(false)
        }
    }

    return (
        <Container>
            <H1>FORGOT PASSWORD </H1>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <TextField
                        sx={{ input: { color: '#FFF',fontSize:'1.5rem' } }}
                        type='email'
                        margin='normal'
                        color="warning"
                        style={{background: "#313841",color:"#e2a669"}}
                        fullWidth
                        id="outlined-basic"
                        label="Enter Email to send Password Reset Link"
                        variant="filled" 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        required
                    />
                    {pending
                        ? <Button type='submit' color="warning" fullWidth variant="contained"  >   </Button>
                        :<Button type='submit' color="warning" fullWidth variant="contained" endIcon={<SendIcon />} >Send</Button>  
                    }
                    
                </FormGroup>
            </Form>
        </Container>
    )
}

export default ForgotPasswordForm