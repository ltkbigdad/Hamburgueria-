import styled from "styled-components";

export const Container = styled.div`
    height: 21.65em;
    width: 18.75em; 
    border: 2px solid var(--grey-100);
    border-radius: 5px;
    background: #FFFFFF; 

    :hover{
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

    .buttonAdd{
        height: 40px;
        width: 106px;
        margin-left: 1.31rem;
        margin-top: 13px;
    }
`;

