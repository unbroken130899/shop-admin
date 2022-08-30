import styled from "styled-components";

export const Wrapper = styled.button`
  border: 1px solid transparent;
  min-width: 20px;
  border-radius: 4px;
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 5px;
  color: #fff;
  position: relative;
  transition: easy-out opacity 0.16px;
  &.primary {
    background-color: var(--indigo);
    border-color: var(--indigo);
  }
  &.secondary {
    background-color: var(--blue);
    border-color: var(--blue);
  }
  &.success {
    background-color: var(--green);
    border-color: var(--green);
  }
  &.info {
    background-color: var(--cyan);
    border-color: var(--cyan);
  }
  &.warning {
    background-color: var(--yellow);
    border-color: var(--yellow);
  }
  &.danger {
    background-color: var(--red);
    border-color: var(--red);
  }
  &.dark {
    background-color: var(--dark);
    border-color: var(--dark);
  }
  &.link {
    background-color: transparent;
    border-color: transparent;
    color: var(--indigo);
    text-decoration: underline;
  }
  &.light {
    background-color: var(--light);
    border-color: var(--light);
    color: #000;
  }
  &.outline.primary {
    background-color: transparent;
    color: var(--indigo);
  }
  &.outline.secondary {
    background-color: transparent;
    color: var(--blue);
  }
  &.outline.success {
    background-color: transparent;
    color: var(--green);
  }
  &.outline.info {
    background-color: transparent;
    color: var(--cyan);
  }
  &.outline.warning {
    background-color: transparent;
    color: var(--yellow);
  }
  &.outline.danger {
    background-color: transparent;
    color: var(--red);
  }
  &.outline.dark {
    background-color: transparent;
    color: var(--dark);
  }
  &.rounded {
    border-radius: 32px;
  }
  &.soft {
    border-color: transparent;
  }
  &.soft-primary {
    background-color: rgba(64, 81, 137, 0.1);
    color: var(--indigo);
  }
  &.soft-secondary {
    background-color: rgba(53, 119, 241, 0.1);
    color: var(--blue);
  }
  &.soft-success {
    background-color: rgba(10, 179, 156, 0.1);
    color: var(--green);
  }
  &.soft-info {
    background-color: rgba(41, 156, 219, 0.1);
    color: var(--cyan);
  }
  &.soft-warning {
    background-color: rgba(247, 184, 75, 0.1);
    color: var(--yellow);
  }
  &.soft-danger {
    background-color: rgba(240, 101, 72, 0.1);
    color: var(--red);
  }
  &.soft-dark {
    background-color: rgba(33, 37, 41, 0.1);
    color: var(--dark);
  }
  &.ghost {
    border-color: transparent;
    background-color: transparent;
  }
  &.ghost-primary {
    color: var(--indigo);
  }
  &.ghost-secondary {
    color: var(--blue);
  }
  &.ghost-success {
    color: var(--green);
  }
  &.ghost-info {
    color: var(--cyan);
  }
  &.ghost-warning {
    color: var(--yellow);
  }
  &.ghost-danger {
    color: var(--red);
  }
  &.ghost-dark {
    color: var(--dark);
  }
  &.uppercase {
    text-transform: uppercase;
  }
`;
