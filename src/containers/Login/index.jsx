import { Container, LeftContainer, RightContainer, Title, Form, InputContainer } from "./styles"
import Logo from '../../assets/logo.svg'
import {Button} from "../../components/Button"

export function Login() {
    return (
        <Container>
            <LeftContainer>
            <img src={Logo} alt="Logo Devburger" />
            </LeftContainer>
            <RightContainer>
                <Title>
                Olá, seja bem vindo ao <span> Dev Burguer!</span>
                <br/>
                Acesse com seu <span>Login e senha.</span> 
                </Title>

                <Form>
                    <InputContainer>
                    <label>Email</label>
                    <input type="email" />
                    </InputContainer>

                    <InputContainer>
                    <label>Senha</label>
                    <input type="password" />
                    </InputContainer>

                    <Button>Entrar</Button>
                
                </Form>

                <p>Não possui uma conta? <a>Cadastre-se</a> </p>

            </RightContainer>
        </Container>
    )
}