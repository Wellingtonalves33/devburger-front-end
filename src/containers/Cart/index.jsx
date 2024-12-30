import { Container, Banner, Title, Content } from "./styles";
import Logo from "../../assets/logo-dev.svg"
import { CartItems, CartResume } from "../../components";

export function Cart() {
    return (
        <Container>
            <Banner>
            <img src={Logo} alt='logo'/>
            </Banner>
            <Title> ChecKout - Pedido </Title>
            <Content>      
                <CartItems/>
                <CartResume/>
            </Content>
        </Container>
    );
}