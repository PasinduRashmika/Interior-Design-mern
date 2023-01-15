import { useState,useEffect } from "react";
import styled from "styled-components";
import { HiArrowNarrowUp } from "react-icons/hi";
const ScrollToTop = (props) => {

    const Icon = styled.div`
        &{
            position: fixed;
            bottom: 5%;
            right: 3%;
            font-size: 25px;
            cursor: pointer;
            border: none;
            color:#004f9b;
            z-index: 4;
            ${'' /* background-color: red; */}
            background:linear-gradient(to right,var(--color-Eight),var(--color-Ten) );
            border-radius: 50%;
            width: 3.5rem;
            height: 3.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.2s;
            ${'' /* box-shadow: 3px 3px 6px 0px rgba(235,235,235,0.95);
-webkit-box-shadow: 3px 3px 6px 0px rgba(235,235,235,0.95);
-moz-box-shadow: 3px 3px 6px 0px rgba(235,235,235,0.95); */}
    }
    &:active{
        transform: scale(0.8);
    }
    &:hover{
        transform: scale(1.1);
    }
    @media screen and (max-width: 800px) {
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }
    `

    const[ScrollToTop,setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset > 200){
                setScrollToTop(true);
            }
            else{
                setScrollToTop(false)
            }
        })
    }, [])
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return ( 
        <div>
            {ScrollToTop && <Icon onClick = {scrollToTop}>
            <HiArrowNarrowUp color="white"/>
                {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"></path></g></svg> */}
                </Icon> }
        </div>
     );
}
 
export default ScrollToTop;