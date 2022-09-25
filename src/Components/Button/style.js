import styled from "styled-components"

export const Container = styled.div`
    background: ${(props) => (props.default ? "#27ae60" : "#e0e0e0") };
    color: ${(props) => (props.default ? "#ffffff" : "#828282") };
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    line-height: 19px;
    height: 60px;
    width: 130px;
    border-radius: 8px;
    padding: 0px, 20px, 0px, 20px;
    gap: 10px;
    border:  2px solid ${(props) => (props.default ? "#27ae60" : "#e0e0e0") };
    cursor: pointer;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    :hover {
    background: ${(props) => (props.default ? "#93d7af" : "#828282") };
    color: ${(props) => (props.default ? "#ffffff" : "#e0e0e0") };
    border:  2px solid ${(props) => (props.default ? "#93d7af" : "#828282") };
  }

`;