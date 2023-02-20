import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    SET_LOADING,
    LOGOUT,
    USER_LOADED,
    CLEAR_ERRORS
} from '../types';

export default (state, action)=>{
    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false
            }
            case REGISTER_FAIL:  
                return{
                    ...state,
                    isAuthenticated:false,
                    loading:false,
                    user:null,
                    error:action.payload
                }
                case REGISTER_FAIL:  
                return{
                    ...state,
                    isAuthenticated:false,
                    loading:false,
                    user:null,
                    error:action.payload
                }
            default:
                return state;
    }
}