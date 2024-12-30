import { Container, Banner, Title, Content } from "./styles";

import { CartItems, CartResume } from "../../components";

export function Cart() {
    return (
        <Container>
            <Banner>
            <img src="/logo.svg" alt="logo" />
            </Banner>
            <Title> ChecKout - Pedido </Title>
            <Content>      
                <CartItems/>
                <CartResume/>
            </Content>
        </Container>
    );
}