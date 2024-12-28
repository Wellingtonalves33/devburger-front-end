
import styled from "styled-components";

export const Container = styled.div`

.carousel-item {
    padding-right: 40px;
}
.react-multi-carousel-list {
    overflow: visible;
}
overflow-x: hidden;
.react-multiple-carousel__arrow--left{
    left: 16px; 
    top: 10px;
}
.react-multiple-carousel__arrow--right{
    right: 50px; 
    top: 10px;
}
padding-bottom: 40px;
padding-left: 40px;

`

export const Title = styled.h2`
font-size: 32px;
color: ${(props) => props.theme.gren};
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
    background-color: ${(props) => props.theme.gren};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
   
   
}
`

