import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 5px;
  background-color: var(--pagename);
  box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
  padding-bottom: 20px;
  button {
    i {
      margin-right: 6px;
    }
  }
  .fa-file-export {
    font-size: 16px;
    margin-left: 15px;
    cursor: pointer;
    color: var(--indigo);
  }
`;
export const Tabs = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  padding-right: 20px;
`;

export const Tab = styled.div`
  cursor: pointer;
  padding: 11px;
  font-weight: 600;
  color: var(--indigo);
  margin: 0 8px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  span {
    padding-right: 8px;
  }
  &.active {
    border-bottom: 1px solid var(--indigo);
    transition: 0.3s all ease-in;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--pagename);
`;
