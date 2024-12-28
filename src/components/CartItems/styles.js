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
    color: ${(props) => props.theme.secondWhite};
    background-color:${(props) => props.theme.purple};
    border-radius: 4px;
    border: none;

    &:hover{
        background-color: ${(props) => props.theme.secondDarkPurple};
    }
   
}
`

export const EmptyCart = styled.p`
font-size: 20px;
text-align: center;
font-weight: 700;

`

export const ProductTotalPrice = styled.p`
font-weight: bold;
`

export const TrashImgem = styled.img`
height: 20px;
width: 20px;
cursor: pointer;
`