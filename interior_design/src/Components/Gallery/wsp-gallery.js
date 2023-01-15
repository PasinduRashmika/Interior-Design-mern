import styled from "styled-components";

export  const GallertyContainer=styled.div`
     background-color: var(--color-Three);
`;
export  const ImageContainer=styled.div`
     background-color: var(--color-Three);
     will-change: transform;
    transition: transform 450ms;
    transition: 0.5s;
     img{
          opacity: 0.5;
          
           &:hover {
               opacity: 1;
               transition: transform 600ms;
               transform: scale(1.054);
           }
    
     }
`;
