import styled from "styled-components";

export const Wrapper = styled.aside`
  width: 260px;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  padding-bottom: 30px;
  overflow-y: auto;
  background-color: var(--wrapper);
  transition: 0.15s width ease-in-out;
  &.small {
    width: 90px;
    overflow: hidden;
  }
  .active {
    p {
      color: #fff !important;
    }
  }
  .accordion {
    font-size: 15px;
    cursor: pointer;
    color: var(--link);
    transition: color 0.15s ease-in-out;
    position: relative;
    width: 100% !important;
  }
  .collapse-trigger[aria-expanded="true"] .fa-chevron-down {
    transform: translateY(-50%) rotate(-180deg);
    right: 30px;
  }
  .collapse-panel {
    padding-left: 20px;
  }
`;

export const Logo = styled.div`
  margin-top: 28px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  &.small {
    img {
      margin-right: 0;
    }
    span {
      display: none;
    }
  }
`;

export const Links = styled.div`
  &.small {
    span,
    .fa-chevron-down {
      display: none !important;
    }
    p {
      justify-content: center;
      margin: 8px 0;
    }
    i {
      font-size: 20px;
      width: auto;
    }
    b {
      position: absolute;
      top: -5px;
      right: 14px;
      width: 18px;
      height: 18px;
    }
    .collapse-panel {
      padding-left: 0;
    }
  }
`;

export const LinkItem = styled.p`
  padding: 15px 24px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--link);
  transition: color 0.15s ease-in-out;
  position: relative;
  i {
    width: 32px;
  }
  b {
    border-radius: 50%;
    background-color: var(--red);
    color: #fff;
    margin-left: 30px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
  }
  &:hover {
    color: #fff;
  }
  .fa-chevron-down {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    transition: 0.15s all ease-in-out;
  }
`;

export const ForDesktop = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Responsive = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1111;
  .responsive {
    width: 100%;
  }
  @media (min-width: 801px) {
    display: none !important;
  }
`;

export const Closer = styled.div`
  font-size: 28px;
  font-size: 30px;
  color: #fff;
  position: absolute;
  right: 40px;
  top: 20px;
`;
