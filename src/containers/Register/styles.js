import styled from "styled-components";
import Fundo from "../../assets/fundo-login.svg";
import FundoForm from "../../assets/fundo-form.svg";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;

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
    min-height: 250px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    min-height: 200px;
    display: none;
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
    margin-top: 15px;
    text-align: center;

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 30px 20px;
    min-height: auto;
  }
  @media (max-width: 768px) {
   width: 100vw;
   height: 100vh;
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-weight: 400;
  font-size: 36px;
  color: ${(props) => props.theme.purple};
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;

    @media (max-width: 768px) {
      height: 40px;
      font-size: 14px;
    }
  }

  label {
    font-size: 16px;
    font-weight: 600;
    color: aliceblue;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    font-size: 14px;
    line-height: 1;
    color: ${(props) => props.theme.darkRed};
    font-weight: 600;
    min-height: 18px;
    margin: 2px 0;

    @media (max-width: 768px) {
      font-size: 12px;
      min-height: 16px;
    }
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;