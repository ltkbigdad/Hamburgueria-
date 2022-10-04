import styled from "styled-components";

export const Container = styled.div`
    height: 21.65em;
    width: 18.75em; 
    border: 2px solid var(--grey-100);
    border-radius: 5px;
    background: #FFFFFF; 

    Container:focus{
        border: 2px solid #27ae60;
    }
`;



export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 9.375rem;
    width: 18.75rem;


`;

export const Content = styled.div`
    .card_title{
        font-family: 'Inter';
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        margin-left: 1.31rem;
        margin-top: 26px;
        color: #333333;
    }

    .cat_title{
        font-family: 'Inter';
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        margin-left: 1.31rem;
        margin-top: 20px;
        color: #828282;
    }

    .price{
        font-family: 'Inter';
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        margin-left: 1.31rem;
        margin-top: 10px;
        color: #27AE60;
    }

    button{
        height: 40px;
        width: 106px;
        left: 20px;
        top: 133px;
        border-radius: 8px;
        padding: 0px 20px 0px 20px;
        border: 2px solid #27AE60;
        margin-left: 1.31rem;
        margin-top: 13px;
        background: #27AE60;
        font-family: 'Inter';
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;



    }
`;

