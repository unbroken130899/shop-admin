import styled from "styled-components";
import { FlexCommon } from "../common/global/global";

export const Wrapper = styled(FlexCommon)`
  padding: 6px 24px;
  width: 100%;
  background-color: var(--header);
  .fa-bars-staggered {
    color: var(--gray-700);
    font-size: 22px;
    cursor: pointer;
  }
`;

export const Profile = styled(FlexCommon)`
  padding: 10px 14px;
  border-radius: 8px;
  margin-left: 16px;
  background-color: var(--topbar-user-bg);
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }
  p {
    color: var(--gray-700);
    span {
      display: block;
      font-size: 12px;
      color: #878a99;
    }
  }
`;
