import styled  from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
    height: 80vh;
    position: relative;

    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const Body = styled.div`
    position: absolute;  
    inset: 0 ;
    background: rgba(0,0,0,0.4);
`;
export const VideoCircle = styled.div`
    width: 100px ;
    height: 100px;
    border-radius: 50%;
    border:none;
    cursor: pointer;
    margin-left: 45%;
    margin-top: 16%;

`;