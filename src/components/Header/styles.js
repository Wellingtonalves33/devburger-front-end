import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: ${(props) => props.theme.mainBlack};
    width: 100%;
    height: 72px;
    padding: 0 56px;
    position: relative;

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    height: 72px;
`;

export const MenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        hr {
            height: 24px;
            border: none;
            border-left: 3px solid ${(props) => props.theme.darkGray};
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const HeaderLink = styled(Link)`
    color: ${(props) => (props.$isActive ? props.theme.purple : props.theme.white)};
    border-bottom: ${(props) => (props.$isActive ? "3px solid #9758a6" : "none")};
    text-decoration: none;
    font-size: 14px;
    transition: color 200ms;

    &:hover {
        color: #9758a6;
    }

    @media (max-width: 768px) {
        border-bottom: none;
        padding: 12px 0;
        width: 100%;
        text-align: center;
        font-size: 16px;
        
        &:not(:last-child) {
            border-bottom: 1px solid ${(props) => props.theme.darkGray};
        }
    }
`;

export const MobileMenu = styled.div`
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.mainBlack};
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;

    @media (max-width: 768px) {
        gap: 20px;
    }
`;

export const Logout = styled.button`
    color: #ff3205;
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p {
        color: #fff;
        line-height: 90%;
        font-weight: 300;

        span {
            font-weight: 700;
            color: ${(props) => props.theme.purple};
        }
    }

    @media (max-width: 768px) {
        button {
            display: none;
        }
        
        p {
            font-size: 12px;
        }
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
        display: none;
    }
`;