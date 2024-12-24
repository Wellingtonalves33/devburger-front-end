import { Container, Banner, Title, Content } from "./styles";
import Logo from '../../assets/logo.svg'
import { CartItems } from "../../components/CartItems";
export function Cart() {
    return (
        <Container>
            <Banner>
            <img src={Logo} alt='logo'/>
            </Banner>
            <Title> ChecKout - Pedido </Title>
            <Content>      
                <CartItems/>
                {/* <CartResume/> */}
            </Content>
        </Container>
    );
}