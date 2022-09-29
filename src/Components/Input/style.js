import styled from "styled-components";

export const Container = styled.div`
  display: flex;  
  height: 60px;
  width: 306px;
  left: 20px;
  top: 20px;
  
  
  /* border: 2px solid black; */

  position: relative;
  padding-top: 13px;

  input{
    border: 1px solid #e0e0e0;
    background: #f5f5f5;;
    border-radius: 8px;
    outline: none;
    min-width: 250px;
    padding: 0px 10px 0px 20px;
    font-size: 16px;
    font-weight: 400;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;
    -webkit-appearance:none;
  }

  input:focus{
    border: 2px solid #333333;
    background: #ffffff;
  }  

  input::placeholder{
    color:transparent;
  }

  label{
    pointer-events: none;
    position: absolute;
    top: calc(50% - 8px);
    left: 5px;
    color: #999999;
    font-size: 16px;
    font-weight: 400;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;    
    padding: 5px;
    box-sizing: border-box;
  }

  input:required:invalid + label{
    color: red;
  }

 input:focus:required:invalid{
    border: 2px solid red;
  }
  input:required:invalid + label:before{
    content: '*';
  }
  input:focus + label,
  input:not(:placeholder-shown) + label{
    font-size: 15px;
    top: 0;
    color: #999999;
    background: #ffffff;
  }



    


   

    
`;

// export const InputContainer = styled.div`
//   width: 100%;
//   display: flex;
  
 
// `;