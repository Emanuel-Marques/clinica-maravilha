import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  hr {
    margin-top: 50px;
    border: 1px solid #595d;
  }
  button {
    background-color: #303137;
    padding: 16px;
    width: 200px;
    border: none;
    cursor: pointer;
    color: white;
    transition: 0.2s ease-in-out;
  }
  button:hover {
    background-color: white;
    color: #303137;
  }
  .green-bg {
    background-color: #02BE58;
  }
`;

export const FootContent = styled.footer`
  display: flex;
  background-color: #02BE58;
  justify-content: space-between;
  align-items: baseline;
  padding: 40px;
  section {
    display:flex;
    flex-flow: column;
  }
  p {
    font-size: 30px;
    color: white;
    margin: 0;
  }
  h3 {
    font-size: 28px;
    color: #303137;
    margin: 0
  }
`

export const MainContent = styled.main`
  background-color: #02BE58;  
  display: flex;
  justify-content: space-around;
  color: white;
  .dec {
    float: right;
  }
`

export const FormContent = styled.form`
  display: flex;
  flex-flow: column;
  gap: 10px;
  width: 40%;
  input { 
    padding: 1rem;
    width: 100%;
    margin-bottom: 7px;
    border: none;
  }
  .submit{
    font-size:18px;
  }

  textarea {
    resize: none;
    padding: 1rem;
    height: 70px;
    width: 100%;
    border: none;
  }
`;

export const Card = styled.form`
  display: flex;
  flex-flow: column;
  width: 500px;
  text-align: left;
  align-items: start;
  background-color: #303137;
  padding: 20px;
  border-radius: 10px;
  .row {
    display: flex;
    gap: 15px;
  }
`;