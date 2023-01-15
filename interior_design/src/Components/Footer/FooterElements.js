import styled from "styled-components";

export  const FooterContainer=styled.div`
    display: flex;
    height: auto;
    background: var(--color-Eleven);
    @media screen and (max-width: 550px) {
        height: 35rem; 
    }
`;
export  const FooterColOne=styled.div`
    display: flex;
    flex:  0 1 60%;
    color:var(--color-One);
    border: none;

    @media screen and (max-width: 550px) {
        display :flex ;
        flex:  0 1 100%;
    }
`;
export  const FooterSubColOne=styled.div`
    display: flex;
    flex:  0 1 50%;
    padding: 5rem 5.5rem;
    height:auto;

    @media screen and (max-width: 800px) {
        display: flex;
    flex:  0 1 70%;
        padding: 5rem 3.5rem;
    }
    @media screen and (max-width: 333px) {
        padding: 5rem 2.5rem;
    }
`;
export  const FooterSubColOneBody=styled.div`
    @media screen and (max-width: 900px) {
        
    }
`;
export  const TitleOne=styled.div`
    text-transform: uppercase;
    font-size: 2.1rem;
    font-family: 'Raleway', sans-serif;
    font-weight :300 ;
    @media screen and (max-width: 900px) {
        font-size:1.5rem;
    }
    
    @media screen and (max-width: 333px) {
        font-size:1rem;
    }
`;
export  const SubTitleOne=styled.div`
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    font-weight :500 ;
`;
export  const ConName=styled.div`
    font-size: 2.1rem;
    margin-top: 2rem;
    font-family: 'Raleway', sans-serif;
 
    @media screen and (max-width: 900px) {
        font-size:1.2rem;
        margin-top: 1rem;
    }
`;
export  const Date=styled.div`
    font-size: 1.1rem;
    color:var(--color-grey);
    font-family: 'Montserrat', sans-serif;
    @media screen and (max-width: 900px) {
        font-size:0.75rem;
    }
`;

export  const ConeAddress=styled.div`
    font-size: 1.5rem;
    color:var(--color-Two);
    font-family: 'Raleway';
    padding:2% 0;
    p{
        font-family: 'Raleway';
        padding:2% 0;
        border-bottom:1px solid var(--color-Five);
    }
    @media screen and (max-width: 900px) {
        font-size:0.75rem;
    }
`;
export  const FooterSubColTwo=styled.div`
    padding: 5rem 3.5rem;
    display: flex;
    flex:  0 1 50%;
    height:auto;
    @media screen and (max-width: 900px) {
        padding: 5rem 1rem;
    }
`;
export  const TitleTwo=styled.div`
    text-transform: uppercase;
    color:var(--color-purpleOne);
    font-size: 2.1rem;
    font-family: 'Raleway';
    font-weight :500 ;
    @media screen and (max-width: 900px) {
        font-size:1.5rem;
    }
`;
export  const SubTitleTwo=styled.div`
    text-transform: uppercase;
    color:var(--color-white);
    font-size: 2.1rem;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    font-weight :500 ;

    @media screen and (max-width: 900px) {
        font-size:1.2rem;
        margin-top: 1rem;
    }
`;
export  const FooterSubColTwoBody=styled.div`
    padding: 0rem 2.5rem;
    height:auto;
    @media screen and (max-width: 900px) {
        padding: auto 1rem;
    }
`;


export  const Office=styled.div`

    font-size: 2.1rem;
    margin-top: 2rem;
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
    @media screen and (max-width: 900px) {
        font-size:1.2rem;
        margin-top: 1rem;
    }
`;
export  const OfficeAddress=styled.div`
    font-size: 1.5rem;
    color:var(--color-Two);
    padding:2% 0;
    font-family: 'Raleway';
    p{
        font-family: 'Raleway';
        display: flex;
        padding:2% 0;
        border-bottom:1px solid var(--color-Five);
    }
    pre{
        font-family: 'Raleway';
        color: var(--color-Eight);
        width:20%;
    }
    a{
        font-family: 'Raleway';
        color: var(--color-Eight);
    }
    @media screen and (max-width: 900px) {
        font-size:0.75rem;
    }
`;
export  const ConvContact=styled.div`
    /* font-weight: 600; */
    font-size:2.1rem;
    margin-top: 2rem;
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
    @media screen and (max-width: 900px) {
        font-size:1.2rem;
        margin-top: 1rem;
    }
`;
export  const ConContactInfo=styled.div`
    font-size: 1.1rem;
    color:var(--color-grey);
    font-family: 'Montserrat', sans-serif;
`;
export const FooterContactP=styled.p`
    font-family: 'Montserrat', sans-serif;
`;
export  const FooterColTwo=styled.div`
   display: flex;
    flex:  0 1 40%;
    border: none;
    background-color: var(--color-darkblue);
   img{
        width: 100%;
        height: 100%;
        border: none;
    }
    @media screen and (max-width: 550px) {
        display: none;   
    }
    
`;
