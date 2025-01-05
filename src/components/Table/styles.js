import styled from "styled-components";

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
  table-layout: fixed;

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    min-width: 100%;
    font-size: 12px;
    
    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.lightGray};
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.purple};
      border-radius: 4px;
    }
  }
`;

export const Header = styled.thead`
  @media (max-width: 480px) {
    display: table-header-group;
  }
`;

export const Body = styled.tbody`
  @media (max-width: 480px) {
    display: table-row-group;
  }
`;

export const Tr = styled.tr`
  @media (max-width: 480px) {
    display: table-row;
  }
`;

export const Th = styled.th`
  &:nth-child(1) { width: 10%; }
  &:nth-child(2) { width: 30%; }
  &:nth-child(3) { width: 15%; }
  &:nth-child(4) { width: 20%; }
  &:nth-child(5) { width: 10%; }
  &:nth-child(6) { width: 10%; }
  padding: 8px 6px;
  text-align: left;
  color: ${(props) => props.theme.secondWhite};
  background-color: ${(props) => props.theme.secondBlack};
  border-bottom: 1px solid ${(props) => props.theme.lightGray};
  font-size: 12px;

  &:first-child {
    border-top-left-radius: 20px;
  }

  &:last-child {
    border-top-right-radius: 20px;
  }

  @media (max-width: 768px) {
    padding: 6px 4px;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 4px 3px;
    font-size: 10px;
  }
`;

export const Td = styled.td`
  &:nth-child(1) { width: 10%; } /* Coluna da imagem */
  &:nth-child(2) { width: 30%; } /* Coluna do nome */
  &:nth-child(3) { width: 15%; } /* Coluna do preço */
  &:nth-child(4) { width: 20%; } /* Coluna da quantidade */
  &:nth-child(5) { width: 10%; } /* Coluna do total */
  &:nth-child(6) { width: 10%; }  /* Coluna do ícone de lixeira */
  padding: 8px 6px;
  color: ${(props) => props.theme.secondBlack};
  font-weight: 500;
  line-height: 110%;
  font-size: 12px;
  white-space: normal;
  word-wrap: break-word;
  max-width: 100px;

  @media (max-width: 768px) {
    padding: 6px 4px;
    font-size: 11px;
    max-width: 80px;
  }

  @media (max-width: 480px) {
    padding: 4px 3px;
    font-size: 10px;
    max-width: 70px;
  }
`;