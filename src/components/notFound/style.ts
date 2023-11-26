import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #303137
  }
`;
export const Main = styled.main`
  display: flex;
  flex-flow: column;
  margin: auto;
  text-align: center;
`;

export const Content = styled.div`
  h1{
    font-weight: 500;
    font-size: 100px;
    color: #02BE58;
  }
  h2{
    font-weight: 500;
    font-size: 60px;
    color: white;
  }
`;