import { useState } from 'react';
import {
    Container,
    Content,
    Navigation,
    HeaderLink,
    Options,
    Profile,
    LinkContainer,
    Logout,
    MobileMenu,
    MenuButton
} from "./styles";
import { UserCircle, ShoppingCart, List } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

export function Header() {
    const navigate = useNavigate();
    const {logout, userInfo} = useUser();
    const {pathname} = useResolvedPath();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function logoutUser(){
        logout();
        navigate('/'); 
    }

    return (
        <Container>
            <Content>
                <MenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <List size={24} color="#FFF" />
                </MenuButton>

                <Navigation>
                    <div>
                        <HeaderLink 
                            to="/user/home" 
                            $isActive={pathname === "/user/home"}
                        >
                            Home
                        </HeaderLink>
                        <hr></hr>
                        <HeaderLink 
                            to="/user/cardapio" 
                            $isActive={pathname === "/user/cardapio"}
                        >
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>

                <Options>
                    <Profile>
                        <UserCircle size={24} color="#FFf" />
                        <div>
                            <p>
                                Olá, <span>{userInfo.name}</span>
                            </p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>

                    <LinkContainer>
                        <ShoppingCart size={24} color="#FFf" />
                        <HeaderLink to="/user/carrinho">Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>

            {isMobileMenuOpen && (
                <MobileMenu>
                    <HeaderLink 
                        to="/user/home" 
                        $isActive={pathname === "/user/home"}
                    >
                        Home
                    </HeaderLink>
                    <HeaderLink 
                        to="/user/cardapio" 
                        $isActive={pathname === "/user/cardapio"}
                    >
                        Cardápio
                    </HeaderLink>
                    <HeaderLink 
                        to="/user/carrinho"
                    >
                        Carrinho
                    </HeaderLink>
                </MobileMenu>
            )}
        </Container>
    );
}