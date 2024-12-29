import styled from "styled-components";

export const Container = styled.div`

`
export const ProductImage = styled.img`
height: 80px;
border-radius: 16px;
padding: 12px;
background-color: #f1f1f1;
`

export const EditButton = styled.button`
border: none;
background-color: ${props => props.theme.darkwhite};
height: 32px;
width: 32px;
border-radius: 8px;
margin: 0 auto;

display: flex;
align-items: center;
justify-content: center;
svg{
    height: 18px;
    width: 18px;
}

&:hover{
    background-color: ${props => props.theme.purple};
   
    
    svg{
        fill: ${props => props.theme.white};
    }
}
`