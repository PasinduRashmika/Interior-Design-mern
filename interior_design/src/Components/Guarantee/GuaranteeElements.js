import styled from "styled-components";

export const GuaranteeContainer =styled.div`
    background: var(--color-Six);
    display: flex;
    flex:  0 1 100%;
    height: 3rem;
    color: var(--color-One);
    padding: 2% 20%;
    height: auto;
`;
export const GuaranteeOne =styled.div`
    text-align:center;
    flex:  0 1 100%;
    border-right:1px solid var(--color-Ten);
    border-left:1px solid var(--color-Ten);
`;
export const GuaranteeRowOne =styled.div`
    font-size:2rem;
    padding:2% 0;
    color: var(--color-Ten);
    font-weight:700;
        font-family: 'Raleway';
    @media screen and (max-width: 1000px) {
            font-size:1.5rem;
    }
    @media screen and (max-width: 750px) {
            font-size:1rem;
    }
    @media screen and (max-width: 450px) {
            font-size:0.75rem;
    }
    
`;
export const GuaranteeRowTwo =styled.div`
    font-size:2rem;
    padding:2% 0;
    font-family: 'Raleway';
    @media screen and (max-width: 1000px) {
            font-size:1.5rem;
    }
    @media screen and (max-width: 750px) {
            font-size:1rem;
    }
    @media screen and (max-width: 450px) {
            font-size:0.75rem;
    }
`;
