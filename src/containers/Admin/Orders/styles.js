import styled from "styled-components";
import Select from 'react-select'

export const ProductImage = styled.img`
padding: 12px;
height: 80px;
border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
width: 240px;

`
export const Filter = styled.div`
display: flex;
justify-content: center;
margin: 28px 0;
gap: 50px;
`

export const FilterOption = styled.button`
cursor: pointer;
background: none;
border: none;
color: ${(props) => props.$isActiveStatus ? props.theme.purple : props.theme.darkGray };
border-bottom: ${(props) => props.$isActiveStatus ? `3px solid ${props.theme.purple}` : `trasparent` };
font-size: 18px;
line-height: 10px;
padding-bottom: 5px;

`
