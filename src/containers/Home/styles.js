import styled from "styled-components";
import BannerHome from "../../assets/banner-home.svg";
import FundoForm from "../../assets/fundo-form.svg";

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;
    position: relative; /* Adicionado para melhor controle do título */

    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 100px;
        color: ${(props) => props.theme.darkWhite};
        position: absolute;
        right: 20%;
        top: 10%;
    }

    @media (max-width: 768px) {
        height: 320px; /* Reduzindo altura do banner para mobile */

        h1 {
            font-size: 60px; /* Reduzindo tamanho da fonte */
            right: 50%; /* Centralizando */
            transform: translateX(50%); /* Garantindo centralização perfeita */
            top: 15%; /* Ajustando posição vertical */
        }
    }

    @media (max-width: 480px) {
        height: 280px;

        h1 {
            font-size: 48px;
        }
    }
`;

export const Container = styled.section`
    background: linear-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.4)
    ),
    url('${FundoForm}');
    min-height: 100vh;
`;