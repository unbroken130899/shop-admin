import styled from "styled-components";
import { Modal } from "react-tiny-modal";

export const AsModal = styled(Modal)`
  z-index: 9999 !important;
  background: rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  overflow-y: auto;
  .error {
    color: var(--red);
    margin: 5px 0;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const Card = styled.div`
  width: 1000px;
  padding: 36px;
  border-radius: 8px;
  background-color: var(--pagename);
  border: 0 solid rgba(0, 0, 0, 0.125);
  box-shadow: 0px 4px 36px rgba(21, 26, 36, 0.08);
  .gif {
    display: block;
    width: 150px;
    margin: 0 auto;
  }
  .text {
    color: #878a99;
    line-height: 1.4;
    text-align: center;
    font-size: 16px;
    margin-bottom: 20px;
  }
  h5 {
    text-align: center;
    margin: 24px;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
