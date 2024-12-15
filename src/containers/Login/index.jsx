import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from "react-toastify";

import { Container, LeftContainer, RightContainer, Title, Form, InputContainer } from "./styles"
import Logo from '../../assets/logo.svg'
import {Button} from "../../components/Button"

import { api } from "../../services/api";

export function Login() {
    const schema = yup
.object({
    email: yup.string().email('Digite um E-mail válido').required('E-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('digite uma senha válida'),
  })
  .required();

    const { register,
         handleSubmit,
          formState:{ errors },
         } = useForm({
        resolver: yupResolver(schema)
      });
   
      console.log(errors);
    
      const onSubmit = async data => {
      const response = await toast.promise(
        api.post('/session', {
            email: data.email,
            password: data.password,
        }),
        {
            pending: 'Verificando seus dados...',
            success: 'Seja bem vindo(a) 👌',
            error: 'Email ou senha inválidos 🤯' 
        }
      );
         console.log(response);
      }

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

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                    <label>Email</label>
                    <input type="email"  {...register("email")}/>
                    <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                    <label>Senha</label>
                    <input type="password"  {...register("password")} />
                    <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                
                </Form>

                <p>Não possui uma conta? <a>Cadastre-se</a> </p>

            </RightContainer>
        </Container>
    )
}