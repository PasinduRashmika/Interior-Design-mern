import React, { useReducer } from "react";
import axios from 'axios';
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";
import setAuthToken from "../../utils/setAuthToken";


const AuthState = props=>{
    const initialState = {
        isAuthenticated: null,
        loading:true,
        user:null,
        error:null,
    };
    const [state, dispatch] = useReducer(authReducer, initialState);

    //Load User
    const loadUser = async ()=>{
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        //console.log("AuthState "+localStorage.token);
        try{
            const res = await axios.get('http://localhost:3000/api/v1/users/getUserProfile');
            //console.log(res.data);
        dispatch({
            type:USER_LOADED,
            payload:res.data
            
        })
        }catch(err){
            console.log(err);
            dispatch({type:AUTH_ERROR})
        }
    }

    //Regitser User
    const register = async formData =>{
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }

    try{
        const res = await axios.post('http://localhost:3000/api/v1/users/signup',formData,config);
        console.log(res.data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload:res.data
        })
        loadUser();

    }catch(err){
        console.log(err.response);
        dispatch({
            type: REGISTER_FAIL,
            // payload:err.response.data.msg
        })
    }
    }

    //Login USer 
    const login = async formData =>{
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }

    try{
        const res = await axios.post('http://localhost:3000/api/v1/users/login',formData,config);
        console.log(res.data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload:res.data
        })
        loadUser();
        
    }catch(err){
        console.log(err.response);
        dispatch({
            type: LOGIN_FAIL,
            payload:err.response.data.msg
        })
    }
    }

    //Logout
    const logout = ()=>{
        console.log('logout');
    }

    //Clear Errors
    const clearErrors = ()=>{
        dispatch({type: CLEAR_ERRORS})
    }

    return(
        <AuthContext.Provider
        value={{
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error,
            register,
            loadUser,
            login,
            logout,
            clearErrors
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;