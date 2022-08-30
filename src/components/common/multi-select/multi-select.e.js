import styled from "styled-components";

export const Wraper = styled.div`
  .select__control {
    background-color: var(--input-bg);
    border-color: var(--input-border);
    cursor: pointer;
    &:hover {
      border-color: var(--input-border);
    }
  }
  .select__control--is-focused {
    box-shadow: none;
    border-color: var(--indigo);
  }
  .select__multi-value {
    background-color: rgba(64, 81, 137, 0.1);
  }
  input {
    transform: translateY(2.5px);
  }
`;
