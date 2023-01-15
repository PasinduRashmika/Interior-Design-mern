import styled from "styled-components";

export const PromoHeadContainer = styled.div`
    background:var(--color-Three) ;
    color:var(--color-One);
    display: flex;
    height: 150px;
    padding: 0 1.5%;
    /* @media screen and (max-width: 680px) {
        max-width: calc(80% - 20px);
    } */
`;
export const PromoHeadColOne = styled.div`
    display: flex ;
    flex:0 1 37.5% ;
    align-items:center ;
    justify-content: center;
    /* background: #0f0; */
    hr{
        background:linear-gradient(to right,var(--color-Three),var(--color-Eight) );
        height: 5px;
        border: none;
        width: 90%;
        margin: 0 auto;
        @media screen and (max-width: 680px) {
        display: none;
        }
    }
`;
export const PromoHeadColTwo = styled.div`
    text-transform: uppercase;
    display: flex;
    flex:0 1 25% ;
    color:var(--color-Eight);
    font-size: 2.25rem;
    letter-spacing:0.2rem ;
    align-items:center ;
    justify-content: center;
    font-family: sans-serif;
    /* background: #f00; */
    text-align:center ;
    @media screen and (max-width: 680px) {
            font-size: 1.1rem;
        }
        @media screen and (max-width: 520px) {
            font-size: 1.1rem;
        } 
        @media screen and (max-width: 340px) {
            font-size: 1rem;
            display: grid;
        }       
`;
export const PromoHeadColThree = styled.div`
    flex:0 1 37.5% ;
    display: flex ;
    align-items:center ;
    justify-content: center;
    /* background: #0f0; */
    hr{
        background:linear-gradient(to right,var(--color-Eight),var(--color-Three) );
        height: 5px;
        border: none;
        width: 90%;
        margin: 0 auto;
        @media screen and (max-width: 680px) {
        display: none;
        }
    }
    
`;
export const PromoHeadSenOne = styled.div`
    font-weight: 700;
`;
export const PromoHeadSenTwo = styled.div`
    
`;
export const PromoHeadSenThree = styled.div`
    font-weight: 700;
`;
export const PromoHeadSenFour = styled.div`
    
`;
