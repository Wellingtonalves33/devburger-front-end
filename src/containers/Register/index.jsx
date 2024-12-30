import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Container, LeftContainer, RightContainer, Title, Form, InputContainer,Link } from "./styles"

import { Button } from "../../components/Button"

import { api } from "../../services/api";


export function Register() {
    const navigate = useNavigate();

    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório'),
            email: yup.string().email('Digite um E-mail válido').required('E-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('digite uma senha válida'),
            confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required('digite uma senha válida'),
        })
        .required();

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async data => {

        try {
            const { status} = await api.post('/users',
                {
                   name: data.name,
                   email: data.email,
                   password: data.password,
               },
               {
                   validateStatus: () => true,
               }, 
           );
           if (status === 201 || status === 200) {
            setTimeout(() => {
                navigate('/login');
            },2000);
               toast.success('Cadastro realizado com sucesso');
           } else if(status === 400 || status === 409){
               toast.error('Email ja cadastrado! faça o login para continuar');
           }else{
            throw new Error();
           }  
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error('Falha no sistema, tente novamente');
        }
    };

    return (
        <Container>
            <LeftContainer>
            <img src="/logo.svg" alt="logo" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Criar conta
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <InputContainer>
                        <label>Nome</label>
                        <input type="text"  {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Email</label>
                        <input type="email"  {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password"  {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password"  {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Criar conta</Button>

                </Form>

                <p>Já possui conta? <Link to="/login">Cadastre-se</Link> </p>

            </RightContainer>
        </Container>
    )
}