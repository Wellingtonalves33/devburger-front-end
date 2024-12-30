import { Container, Banner, Title, Content } from "./styles";
import LogoPhoto from '../../assets/Logo.svg'
import { CartItems, CartResume } from "../../components";

export function Cart() {
    return (
        <Container>
            <Banner>
            <img src={LogoPhoto} alt='logo'/>
            </Banner>
            <Title> ChecKout - Pedido </Title>
            <Content>      
                <CartItems/>
                <CartResume/>
            </Content>
        </Container>
    );
}