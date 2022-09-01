import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: auto;
  th i {
    width: calc(100% - 100px);
    text-align: right;
    padding: 0 10px;
    font-size: 12px;
    cursor: pointer;
    &.active {
      color: var(--indigo);
    }
  }
  .title {
    width: 300px;
    display: grid;
    grid-template-columns: 25% 80%;
    align-items: center;
    justify-content: space-between !important;
    margin-left: 6px;
    p {
      font-size: 13px;
      margin-bottom: 4px;
    }
    span {
      font-weight: 300;
      font-size: 12px;
      color: #878a99;
    }
  }
`;

export const ProductImg = styled.div`
  padding: 0px 12px;
  margin-right: 10px;
  img {
    height: 50px;
    border-radius: 8px;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 60px;
  left: -20px;
  border-radius: 6px;
  background-color: var(--pagename);
  z-index: 1111;
  box-shadow: 0 5px 10px rgb(30 32 37 / 12%);
  li {
    padding: 8px 20px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    transition: 0.15s background-color ease-in-out;
    &:hover {
      background-color: var(--light);
    }
    i {
      width: 22px;
    }
  }
`;

export const CardProductImg = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const CardProductInfo = styled.div`
  h4 {
    font-size: 23px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

export const CardProductBrand = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: 500;
    color: var(--text-body);
    font-size: 14px;
    span {
      color: #878a99;
      font-weight: 400;
    }
    :nth-child(2) {
      padding: 0 18px;
      margin: 0 18px;
      border-left: 1px solid var(--border-color);
      border-right: 1px solid var(--border-color);
    }
  }
`;

export const CardProductNumbers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 20px 0;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const CardProductNumber = styled.div`
  padding: 8px;
  display: flex;
  border: 1px dashed var(--border-color);
  i {
    margin-top: 10px;
    margin-right: 8px;
    width: 2rem;
    color: var(--green);
    font-size: 24px;
    text-align: center;
  }
  p {
    font-weight: 600;
    color: var(--text-body);
    font-size: 20px;
    span {
      color: #878a99;
      display: block;
      font-weight: 400;
      font-size: 13px;
    }
    b {
      display: block;
      margin-bottom: 6px;
      font-size: 15px;
      span {
        display: inline;
        margin-left: 4px;
        font-size: 13px;
      }
    }
  }
`;

export const CardProductInfoItem = styled.div`
  color: var(--text-body);
  margin: 20px 0;
  span {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: var(--heading);
    font-weight: 600;
  }
  p {
    font-size: 14px;
    color: var(--gray-700);
  }
`;
