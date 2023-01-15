import styled from "styled-components";

export const CopyRightContainer =styled.div`
  background: var(--color-Eleven);
    display: flex;
    flex:  0 1 100%;;
    height: 3rem;
    color: var(--color-One);
    padding: 2% 0;
    font-family: 'Raleway';

    span{
        display: flex;
        flex:  0 1 100%;;
        justify-content:center;
        align-items:center;
        font-size:12px;

        @media screen and (max-width: 550px) {
            font-size:8px;
    }
    }

    a{
      color: var(--color-Eight);
      font-size:1.5rem;

      @media screen and (max-width: 550px) {
            font-size:8px;
    }
    }
    
`;