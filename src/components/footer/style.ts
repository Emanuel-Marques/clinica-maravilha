import styled from "styled-components";

export const FooterContent = styled.footer`
  background-color: #303137;
  padding: 50px;
  main {
    display: flex;
    flex-flow: column;
    margin: auto;
    text-align: center;
  }
`;

export const SocialAndInput = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  color: white;
  label {
    margin-right: 20px;
  }
  input { 
    padding: 1rem;
    width: 250px
  }

  button {
    background-color: #EF3C3D;
    padding: 1rem;
    border: none;
    cursor: pointer;
    margin-left: 7px;
    width: 200px;
    color: white;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  color: #000;
  padding: 2rem;
`;

export const InformationContent = styled.div`
  display: flex;
  flex-flow: column;
`;

export const LineTitle = styled.div`
  display: flex;
  justify-content: space-around;
  h2 {
    text-align: left;
    color: white;
    font-weight: 500;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  p {
    text-align: left;
    color: white;
  }
`;
