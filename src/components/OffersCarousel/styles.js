
import styled from "styled-components";

export const Container = styled.div`
padding-left: 40px;
.carousel-item {
    padding-right: 40px;
}
`

export const Title = styled.h2`
font-size: 32px;
color: #61A120;
font-weight: 800;
padding-bottom: 12px;
position: relative;
text-align: center;
margin: 70px 0;



&::after {
    content: "";
    position: absolute;
    width: 56px;
    height: 5px;
    background-color: #61A120;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
   
   
}
`

export const ContainerItens = styled.div`
background: url('${(props) => props.imageUrl}');
background-position: center;
background-size: cover;
display: flex;
align-items: center;
padding:20px 10px;
width: 100%;
height: 250px;
border-radius: 20px;

P{
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 150px;
}

`