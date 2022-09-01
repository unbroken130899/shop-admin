import styled from "styled-components";

export const Wrapper = styled.div``;

export const Category = styled.div`
  h5 {
    font-size: 13px;
    padding: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .soft {
    color: #878a99 !important;
  }
`;

export const SubCategories = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr;
  padding-left: 12px;
`;

export const SubCategory = styled.p`
  cursor: pointer;
  color: #878a99;
  position: relative;
  font-size: 12px;
  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    border: 1px solid #878a99;
    transform: translateY(-50%);
  }
`;
