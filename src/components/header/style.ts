import styled from 'styled-components';

export const UlContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  background-color: #303137;
  margin:0;
  li {
    padding: 10px;
    list-style: none;
  }
  a {
    color:white;
  }
  a:hover {
    color: #02BE58;
  }
  img {
    padding-top: 60px; 
  }
  .green {
    color: #02BE58;
  }
`;