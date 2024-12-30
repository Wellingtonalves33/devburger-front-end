import { navLinks } from "./navLinks"
import { Container, Footer, NavLink, NavlinkContainer } from "./styles"
import Logo from "../../assets/logo-dev.svg"
import { SignOut } from "@phosphor-icons/react"
import { useUser} from "../../hooks/UserContext"
import { useResolvedPath } from "react-router-dom"


export function SideNavAdmin() {
    const { logout } = useUser();
    const {pathname} = useResolvedPath();

    return (
        <Container>
            <img src={Logo} alt="logo" />
            <NavlinkContainer>
            {navLinks.map((link) => (
                   <NavLink 
                   key={link.id}
                   to={link.path}
                   $isActive={pathname === link.path}
                   >
                    {link.icon}<span>{link.label}</span>

                   </NavLink>
                ))}
            </NavlinkContainer>

              <Footer>
                <NavLink to={'/login'} onClick={logout}>
                    <SignOut/>
                    <span>Sair</span>
                </NavLink>
                </Footer> 
                

        </Container>
    )
}