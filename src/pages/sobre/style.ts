import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  margin: 100px 60px 100px 60px;
  justify-content: space-between;
  align-items: center;
`;

export const Information = styled.div`
  width: 45%;  
  h3 {
    color: #02BE58;
  }
  h1 {
    color: #303137;
    font-size: 28px;
  }
  button {
    background-color: #02BE58;
    padding: 1rem;
    border: none;
    cursor: pointer;
    width: 200px;
    color: white;
    font-size: 20px;
    font-wight: 500;
  }
  p {
    text-align: justify;
    color: #666666;
  }
`;

export const ImgContainer = styled.div`
  img {
    width: 100vh;
    height: auto;
  }
`;