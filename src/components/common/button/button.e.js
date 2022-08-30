import styled from "styled-components";

export const Wrapper = styled.button`
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  padding: 8px 15px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, transform 0.15s ease-in-out;
  vertical-align: middle;
  color: #fff;
  position: relative;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &::after {
    content: "";
    transition: opacity 0.15s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.06);
    opacity: 0;
    border-radius: 4px;
  }
  &:active {
    transform: scale(0.98);
  }
  &:hover::after {
    opacity: 1;
  }
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
    color: var(--text-body);
  }
  &.outline::after {
    display: none;
  }
  &.outline.primary {
    background-color: transparent;
    color: var(--indigo);
    &:hover {
      color: #fff;
      background-color: var(--indigo);
    }
  }
  &.outline.secondary {
    background-color: transparent;
    color: var(--blue);
    &:hover {
      color: #fff;
      background-color: var(--blue);
    }
  }
  &.outline.success {
    background-color: transparent;
    color: var(--green);
    &:hover {
      color: #fff;
      background-color: var(--green);
    }
  }
  &.outline.info {
    background-color: transparent;
    color: var(--cyan);
    &:hover {
      color: #fff;
      background-color: var(--cyan);
    }
  }
  &.outline.warning {
    background-color: transparent;
    color: var(--yellow);
    &:hover {
      color: #fff;
      background-color: var(--yellow);
    }
  }
  &.outline.danger {
    background-color: transparent;
    color: var(--red);
    &:hover {
      color: #fff;
      background-color: var(--red);
    }
  }
  &.outline.dark {
    background-color: transparent;
    color: var(--dark);
    &:hover {
      color: #fff;
      background-color: var(--dark);
    }
  }
  &.rounded {
    border-radius: 32px;
  }
  &.rounded::after {
    border-radius: 32px;
  }
  &.soft::after {
    display: none;
  }
  &.soft {
    border-color: transparent;
  }
  &.soft-primary {
    background-color: rgba(64, 81, 137, 0.1);
    color: var(--indigo);
    &:hover {
      background-color: var(--indigo);
      color: #fff;
    }
  }
  &.soft-secondary {
    background-color: rgba(53, 119, 241, 0.1);
    color: var(--blue);
    &:hover {
      background-color: var(--blue);
      color: #fff;
    }
  }
  &.soft-success {
    background-color: rgba(10, 179, 156, 0.1);
    color: var(--green);
    &:hover {
      background-color: var(--green);
      color: #fff;
    }
  }
  &.soft-info {
    background-color: rgba(41, 156, 219, 0.1);
    color: var(--cyan);
    &:hover {
      background-color: var(--cyan);
      color: #fff;
    }
  }
  &.soft-warning {
    background-color: rgba(247, 184, 75, 0.1);
    color: var(--yellow);
    &:hover {
      background-color: var(--yellow);
      color: #fff;
    }
  }
  &.soft-danger {
    background-color: rgba(240, 101, 72, 0.1);
    color: var(--red);
    &:hover {
      background-color: var(--red);
      color: #fff;
    }
  }
  &.soft-dark {
    background-color: rgba(33, 37, 41, 0.1);
    color: var(--dark);
    &:hover {
      background-color: var(--dark);
      color: #fff;
    }
  }
  &.lg {
    font-size: 16px;
    padding: 12px 20px;
    border-radius: 5px;
  }
  &.sm {
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 3px;
  }
  &.full {
    width: 100%;
  }
  &.ghost {
    border-color: transparent;
    background-color: transparent;
  }
  &.ghost-primary {
    color: var(--indigo);
    &:hover {
      border-color: var(--indigo);
      background-color: rgba(64, 81, 137, 0.1);
    }
  }
  &.ghost-secondary {
    color: var(--blue);
    &:hover {
      border-color: var(--blue);
      background-color: rgba(53, 119, 241, 0.1);
    }
  }
  &.ghost-success {
    color: var(--green);
    &:hover {
      border-color: var(--green);
      background-color: rgba(10, 179, 156, 0.1);
    }
  }
  &.ghost-info {
    color: var(--cyan);
    &:hover {
      border-color: var(--cyan);
      background-color: rgba(41, 156, 219, 0.1);
    }
  }
  &.ghost-warning {
    color: var(--yellow);
    &:hover {
      border-color: var(--yellow);
      background-color: rgba(247, 184, 75, 0.1);
    }
  }
  &.ghost-danger {
    color: var(--red);
    &:hover {
      border-color: var(--red);
      background-color: rgba(240, 101, 72, 0.1);
    }
  }
  &.ghost-dark {
    color: var(--dark);
    &:hover {
      border-color: var(--dark);
      background-color: rgba(33, 37, 41, 0.1);
    }
  }
  &.icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.icon-header {
    border-radius: 50%;
    font-size: 18px;
    width: 40px;
    height: 40px;
    border: none;
    color: var(--gray-700);
    margin: 0 10px;
    &::after {
      border-radius: 50%;
    }
    &:hover {
      color: var(--blue);
    }
  }
`;
