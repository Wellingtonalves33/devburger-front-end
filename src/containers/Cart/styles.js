import styled from "styled-components";
import Texture from "../../assets/texture.svg";
import FundoForm from "../../assets/fundo-form.svg";


export const Container = styled.div`
background-color: ${(props) => props.theme.secondWhite};
width: 100%;
background:linear-gradient(
    rgba(255,255,255,0.1),
    rgba(255,255,255,0.1)
),
url('${FundoForm}');
min-height: 100vh;

`;
export const Banner = styled.div`
background: url('${Texture}') no-repeat;
background-size: cover;
background-position: center;
background-color: ${(props) => props.theme.mainBlack};
display: flex;
align-items: center;
justify-content: center;
position: relative;

height: 180px;

img{
    height:140px
}
`

export const Title = styled.div`
font-size: 32px;
font-weight: 800;
padding-bottom: 12px;
color: ${(props) => props.theme.gren};
text-align: center;
position: relative;

&::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.gren};
}
`

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 30%;
gap: 40px;
width: 100%;
max-width: 1280px;
padding: 40px;
margin: 0 auto;
`