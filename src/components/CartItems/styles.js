import styled from "styled-components";

export const ProducImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    border-radius: 6px;
  }
`;

export const ButtonGrop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 28px;
    color: ${(props) => props.theme.secondWhite};
    background-color: ${(props) => props.theme.purple};
    border-radius: 4px;
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.secondDarkPurple};
    }
  }

  @media (max-width: 768px) {
    gap: 6px;

    button {
      height: 24px;
      width: 24px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    gap: 4px;

    button {
      height: 20px;
      width: 20px;
      font-size: 12px;
    }
  }
`;

export const EmptyCart = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ProductTotalPrice = styled.p`
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TrashImgem = styled.img`
  height: 18px;
  width: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 16px;
    width: 16px;
  }

  @media (max-width: 480px) {
    height: 14px;
    width: 14px;
  }
`;