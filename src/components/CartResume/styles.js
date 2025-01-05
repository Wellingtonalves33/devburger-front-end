import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 14px;

  * {
    color: ${(props) => props.theme.secondBlack};
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 10px 20%;
    grid-template-areas:
      "title title"
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 16px;
      background-color: ${(props) => props.theme.secondBlack};
      color: ${(props) => props.theme.white};
      width: 100%;
      padding: 10px;
      text-align: center;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      @media (max-width: 768px) {
        font-size: 16px;
        padding: 8px;
        margin-bottom: 12px;
      }

      @media (max-width: 480px) {
        font-size: 14px;
        padding: 6px;
        margin-bottom: 10px;
      }
    }

    .items {
      grid-area: items;
      padding-left: 16px;

      @media (max-width: 768px) {
        padding-left: 12px;
      }

      @media (max-width: 480px) {
        padding-left: 8px;
      }
    }

    .items-price {
      grid-area: items-price;
      padding-right: 16px;
      text-align: right;

      @media (max-width: 768px) {
        padding-right: 12px;
      }

      @media (max-width: 480px) {
        padding-right: 8px;
      }
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 16px;

      @media (max-width: 768px) {
        padding-left: 12px;
      }

      @media (max-width: 480px) {
        padding-left: 8px;
      }
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-right: 16px;
      text-align: right;

      @media (max-width: 768px) {
        padding-right: 12px;
      }

      @media (max-width: 480px) {
        padding-right: 8px;
      }
    }

    @media (max-width: 768px) {
      grid-gap: 8px 15%;
      font-size: 13px;
    }

    @media (max-width: 480px) {
      grid-gap: 6px 10%;
      font-size: 12px;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
    padding: 16px;

    * {
      font-weight: 700;
    }

    @media (max-width: 768px) {
      margin-top: 16px;
      font-size: 16px;
      padding: 12px;
    }

    @media (max-width: 480px) {
      margin-top: 12px;
      font-size: 14px;
      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    border-radius: 12px;
  }
`;