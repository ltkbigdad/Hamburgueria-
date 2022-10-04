import styled from "styled-components";

export const Container = styled.div`
  display: flex; 
  align-items: center;
  
  height: 60px;
  width: 306px;
  min-width: 250px;
  left: 20px;
  top: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  

  input{    
    background: #ffffff;
    border: none;
    outline: none;
    height: 80%;
    width: 60%;
    margin-left: 5px;
    
    padding: 0px 10px 0px 20px;
    font-size: 16px;
    font-weight: 400;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;
    -webkit-appearance:none;
  }

  div{
    width: 54px;
    height: 40px;
    margin-left: 10px;
    border-radius: 8px;    
  }

  /* input:focus{
    border: 2px solid #333333;
    background: #ffffff;
  }   */

  input::placeholder{
    color:transparent;
  }

  

  input:required:invalid + label{
    color: red;
  }

 
  input:required:invalid + label:before{
    content: '*';
  }
  input:focus + label,
  input:not(:placeholder-shown) + Container{
    font-size: 15px;
    top: 0;
    /* color: #999999; */
    background: #ffffff;
  }
    
`;