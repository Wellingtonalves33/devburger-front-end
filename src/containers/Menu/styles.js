import styled from "styled-components";
import FundoCard from "../../assets/fundo-cardapio.svg"
import FundoForm from "../../assets/fundo-form.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;

background:linear-gradient(
    rgba(255,255,255,0.4),
    rgba(255,255,255,0.4)
),
url('${FundoForm}');
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
background-color: #1f1f1f;

h1{
    font-family: "Road Rage", sans-serif;
    font-size: 100px;
    line-height: 65px;
    position: absolute;
    color: #f4f4f4;

    right:20% ;
    top: 30%;

    span{
        display: block;
        color: #f4f4f4;
        font-size: 20px;
        
    }
}
`

export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;
`

export const CategoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
background: none;
color:${(props) => props.$isActiveCategory ? '#9758a6' : '#696969'};
font-size: 20px;
font-weight: 500;
line-height: 20px;
border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6' };
&:hover{
    color: #6f357c;
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
`
