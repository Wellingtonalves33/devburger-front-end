import styled from "styled-components";
import Fundo from "../../assets/fundo-login.svg";
import FundoForm from "../../assets/fundo-form.svg";
import { Link as ReactLink } from "react-router-dom";



export const Container = styled.div`
 display: flex;
 height: 100vh;
 width: 100vw;
`;
export const LeftContainer  = styled.div`
background: url(${Fundo});
background-size: cover;
background-position: center;

height: 100%;
width: 100%;
max-width: 50%;

display:flex ;
align-items: center;
justify-content: center;

img{
    width: 80%;
}
`;

export const RightContainer = styled.div`
background: url(${FundoForm});
background-size: cover;
background-position: center;
background-color: #1e1e1e;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

height: 100%;
width: 100%;
max-width: 50%;

P{
    color: ${(props) => props.theme.white};
    font-size: 18px;
    font-weight: 800;
a{
    text-decoration: underline;
}
}
`;

export const Title = styled.h2 `
 font-family: "Road Rage", sans-serif;
 font-weight: 400;
 font-size: 40px;
 color: ${(props) => props.theme.purple};


`;

export const Form  = styled.form`
 display: flex;
 flex-direction: column;
 gap: 20px;
 padding: 20px;
 width: 100%;
 max-width: 400px;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

input{
    width: 100%;
    border: none;
    border-radius: 5px;
    height: 40px;
    padding: 0 10px;
}

label{
    font-size: 18px;
    font-weight: 600;
    color: aliceblue;
}
p{
   font-size:14px ;
   line-height: 80%;
   color: ${(props) => props.theme.darkRed};
   font-weight: 600;
   height: 10px;
}
`;

export const Link = styled(ReactLink)`
text-decoration: none;
color: ${(props) => props.theme.white};
`;


