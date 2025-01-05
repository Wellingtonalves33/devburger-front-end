import styled from "styled-components";
import Fundo from "../../assets/fundo-login.svg";
import FundoForm from "../../assets/fundo-form.svg";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden; // Previne scroll horizontal

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background: url(${Fundo});
  background-size: cover;
  background-position: center;
  width: 50%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  img {
    width: 100%;
    max-width: 400px;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 300px;
    padding: 40px;
  }

  @media (max-width: 768px) {
display: none;

  img {
    width: 100px;
   
  }
  }
`;

export const RightContainer = styled.div`
  background: url(${FundoForm});
  background-size: cover;
  background-position: center;
  background-color: #1e1e1e;
  width: 50%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;

  p {
    color: ${(props) => props.theme.white};
    font-size: 16px;
    font-weight: 800;
    margin-top: 20px;
    text-align: center;

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    min-height: calc(100vh - 300px);
  }

  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    padding: 20px;
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-weight: 400;
  font-size: 36px;
  color: ${(props) => props.theme.white};
  text-align: center;
  margin-bottom: 30px;
  
  span {
    color: ${(props) => props.theme.purple};
    font-family: "Road Rage", sans-serif;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;
  }

  label {
    font-size: 16px;
    font-weight: 600;
    color: aliceblue;
  }

  p {
    font-size: 14px;
    line-height: 1;
    color: ${(props) => props.theme.darkRed};
    font-weight: 600;
    margin: 0;
    min-height: 20px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;