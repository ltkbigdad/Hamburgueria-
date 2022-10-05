import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;    
    margin-top: 5px;
    border-bottom: 2px solid #E0E0E0;

    .remove{
        width: 1.3em;
        height: 100%;
        background: none;
       
        border-radius: 0px;        
        border: none;
        cursor: pointer;
              
        color: #BDBDBD;
    }

`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ImageContainer = styled.div`
    width: 5.12em;
    height:5em;
    background: #E0E0E0;
    border-radius: 5px;
    margin-bottom: 1em;

    img{
        width: 100%;
    }

   

`;

export const InfoContainer = styled.div`
    .tittle{
        font-family: 'Inter';
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0em;
        text-align: left;
        margin-left: 0.56em;
        color: #333333;

    }

    .counter{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 2.12em;
        width: 6.625em;
        margin-left: 0.56em;
        margin-top: 1.7em;
        border-radius: 0px;
        border: 2px solid #F2F2F2;

        button{
            width: 1.3em;
            height: 100%;
            left: 12em;
            top: 4.12em;
            border-radius: 0px;
            background: #F2F2F2;
            border: none;
            cursor: pointer;
            :hover{
                background: #999999;
            }
            

            font-family: 'Inter';
            font-size: 22px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0em;
            color: #EB5757;
        }
    }
`;
