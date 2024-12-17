import styled from "styled-components";
import BannerHome from "../../assets/banner-home.svg";
import FundoForm from "../../assets/fundo-form.svg";

export const Banner = styled.div`
background: url('${BannerHome}');
background-size: cover;
background-position: center;
height: 480px;

h1{
    font-family: "Road Rage", sans-serif;
    font-size: 100px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 10%;

}
`

export const Container = styled.section`
background:linear-gradient(
    rgba(255,255,255,0.4),
    rgba(255,255,255,0.4)
),
url('${FundoForm}');
min-height: 100vh;
`

export const Content = styled.div`
padding-bottom: 70px;
`