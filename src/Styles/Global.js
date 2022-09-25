import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style-type: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        font-family: 'Inter', sans-serif;
    }

    :root{
        /* primary palet */
        --color-primary: #27ae60;
        --color-secundary:#eb5757;

        /* grey palet*/
        --grey-600:#333333;
        --grey-300:#828282;
        --grey-100: #e0e0e0;
        --grey-0: #f5f5f5;

        /* feedback palette*/
        --negative: #e60000;
        --Warning: #ffcd07;
        --sucess: #168821;
        --information: #155bcb;
    }

`;