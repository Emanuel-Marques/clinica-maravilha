import styled from 'styled-components';
import bg from '../../assets/care-bg.png';

export const Main = styled.main`
  display: flex;
  padding: 80px 80px 80px 20px;
  justify-content: space-between;
  align-items: center;
  background-image: url(${ bg });
`;

export const Information = styled.div`
  width: 45%;  
  color: white;
  text-align: right;
  h1 {
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
    text-align: right;
  }
`;

export const ImgContainer = styled.div`
  img {
    width: 100vh;
    height: auto;
  }
`;