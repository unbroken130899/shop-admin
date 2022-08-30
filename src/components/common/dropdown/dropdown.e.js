import styled from "styled-components";

export const Wrapper = styled.div`
  .select__control {
    &:hover {
      border-color: var(--indigo);
    }
  }
  .select__control--is-focused {
    box-shadow: none;
    border-color: var(--indigo);
  }
  .select__multi-value {
    background-color: rgba(64, 81, 137, 0.1);
  }
`;
