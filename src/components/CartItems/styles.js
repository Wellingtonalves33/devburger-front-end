import styled from "styled-components";

export const ProducImage = styled.img`
width: 80px;
height: 80px;
border-radius: 16px;
`;

export const ButtonGrop = styled.div`
display: flex;
align-items: center;
gap: 12px;

button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    color: #f0f0f0;
    background-color:#9758a6;
    border-radius: 4px;
    border: none;

    &:hover{
        background-color: #6f357c;
    }
   
}
`

export const EmptyCart = styled.p`
font-size: 20px;
text-align: center;
`

export const ProductTotalPrice = styled.p`
font-weight: bold;
`