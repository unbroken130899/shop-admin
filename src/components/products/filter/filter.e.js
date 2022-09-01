import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 5px;
  background-color: var(--pagename);
  position: sticky;
  top: 20px;
  height: 95vh;
  overflow-y: auto;
  h5 {
    font-size: 12px;
    cursor: pointer;
    font-weight: 400;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Head = styled.div`
  padding: 16px;
  h5 {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      padding: 5px 6px;
      margin-right: -8px;
    }
  }
`;

export const FilterSection = styled.div`
  border: 0;
  border-top: 1px solid var(--border-color);
  .text {
    font-size: 12px;
    padding: 16px;
    color: #878a99;
    text-transform: uppercase;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    i {
      transition: 0.3s transform ease-in-out;
    }
    &.open {
      i {
        transform: rotate(180deg);
      }
    }
  }
  label {
    cursor: pointer;
    font-weight: 500;
    font-size: 12px;
  }
  input {
    transform: translateY(-2.2px);
  }
`;

export const AccordionBody = styled.div`
  padding: 0 16px;
  padding-bottom: 20px;
  animation: fade-in 0.3s;
  color: var(--text-body);
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const FilterItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
