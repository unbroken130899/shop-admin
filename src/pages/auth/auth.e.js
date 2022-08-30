import styled from "styled-components";
import { FlexCommon } from "../../components/common/global/global";
import AuthBg from "../../assets/images/auth.jpg";
export const Wrapper = styled(FlexCommon)`
  position: relative;
  height: 100vh;
  background-color: var(--body);
`;

export const Background = styled.div`
  height: 380px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  background-image: url(${AuthBg});
  background-position:50%;
  background-size:cover;
`;

export const Overlay = styled.div`
  background: linear-gradient(90deg, var(--yellow), var(--orange));
  opacity: 0.7;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export const Shape = styled.div`
  bottom: -10px;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  z-index: 1;
  svg {
    fill: var(--body);
    height: auto;
    width: 100%;
  }
`;

export const AuthCard = styled.div`
  width: 30%;
  padding: 32px 24px;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 111;
  background-color: #fff;
  box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
  @media (max-width: 1000px) {
    width: 70%;
  }
`;

export const Center = styled.div`
  text-align: center;
  h5 {
    color: var(--orange);
    font-size: 18px;
    margin-bottom: 8px;
  }
  p {
    font-size: 15px;
    color: #878a99;
  }
`;

export const Form = styled.div`
  margin-top: 20px;
  button {
    margin-top: 10px;
  }
`;

export const FormItem = styled.div`
  margin-bottom: 16px;
  label {
    margin-bottom: 8px;
    display: block;
    text-align: left;
    font-weight: 500;
  }
`;
