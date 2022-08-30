import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  .Dropdown-control {
    background-color: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;
    color: var(--text-body);
    display: block;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.5rem 0.9rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 100%;
    resize: none;
    padding-right: 30px;
    outline: none;
    &::placeholder {
      color: #878a99;
    }
  }
  .is-open .Dropdown-control {
    border: 1px solid var(--indigo);
  }
  .Dropdown-menu {
    position: absolute;
    top: 45px;
    background-color: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;
    color: var(--text-body);
    width: 100%;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.5;
  }
  .Dropdown-option {
    padding: 10px 20px;
    transition: background 0.15s ease-in-out;
    &:hover {
      background-color: var(--light);
    }
  }
`;
