import styled from "styled-components";
import FundoCard from "../../assets/fundo-cardapio.svg"
import FundoForm from "../../assets/fundo-form.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};
  background: linear-gradient(
    rgba(255,255,255,0.4),
    rgba(255,255,255,0.4)
  ), url('${FundoForm}');
  min-height: 100vh;
`

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;
  background: url('${FundoCard}') no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.mainBlack};

  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 100px;
    line-height: 65px;
    position: absolute;
    color: ${(props) => props.theme.darkWhite};
    right: 20%;
    top: 30%;

    span {
      display: block;
      color: ${(props) => props.theme.darkWhite};
      font-size: 20px;
    }

    @media (max-width: 768px) {
      font-size: 60px;
      line-height: 45px;
      right: 10%;
      
      span {
        font-size: 16px;
      }
    }

    @media (max-width: 480px) {
      font-size: 40px;
      line-height: 35px;
      right: 5%;
      text-align: right;
      
      span {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) {
    height: 380px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 30px;
  flex-wrap: wrap;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 40px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    margin-top: 20px;
  }
`

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => props.$isActiveCategory ? '#9758a6' : '#696969'};
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};
  
  &:hover {
    color: ${(props) => props.theme.secondDarkPurple};
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    gap: 30px;
    padding: 20px;
    margin: 30px auto 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 15px;
    margin: 20px auto 0;
  }
`

export const VoltaBtn = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  padding: 7px 30px;
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  border-bottom: 3px solid ${(props) => props.theme.purple};
  border-radius: 6px;

  @media (max-width: 768px) {
    padding: 5px 20px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    padding: 5px 15px;
    font-size: 16px;
  }
`