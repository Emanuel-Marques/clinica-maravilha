import styled from "styled-components";

export const MainContent = styled.main`
  main {
    display: flex;
    margin: auto;
    text-align: center;
    margin: 70px;
  }
  .green {
    background-color: #02BE58;
  }
  div:hover {
    background-color: #02BE58;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  color: white;
  background-color: #303137;
  padding: 40px;
  height: 30%;
  margin-right: 20px;
  h1 {
    font-size: 25px;
  }
  h2 {
    font-size: 25px;
    font-weight: 400;
  }
  transition: 0.2s ease-in-out;
`;