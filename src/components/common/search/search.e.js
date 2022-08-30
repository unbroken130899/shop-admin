import styled from "styled-components";
import { FlexCommon } from "../global/global";

export const Wrapper = styled(FlexCommon)`
  padding: 8px 14px;
  border-radius: 6px;
  width: 100%;
  border: 1px solid var(--border-color);
  i {
    transform: translateY(1px);
    color: #6f767e;
    margin-right: 12px;
  }
  input {
    color: var(--text-body);
    flex: 1;
  }
  &.small {
    width: 150px !important;
  }
`;
