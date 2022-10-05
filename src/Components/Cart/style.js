import styled from "styled-components";

export const Container = styled.div`
position: absolute;
display: inline-block;
width: 31.25em;
border-radius: 0.31em;
`;

export const TittleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 13px 22px;
    gap: 10px;
    width: 100%;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;


    h2{
        font-family: 'Inter';
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
    }

    p{
        color: #FFFFFF;
    }
`;

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
    width: 100%;
    border: 1px solid #F5F5F5;
    background: #FFFFFF;
    border-radius: 0px 0px 5px 5px;

    .bagEmpty{
        font-family: 'Inter';
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: #333333;
    }

    .addItens{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #828282;

    }
`;