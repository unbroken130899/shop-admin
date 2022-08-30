import styled from "styled-components";
import { FlexCommon } from "../global/global";

export const Wrapper = styled(FlexCommon)`
  justify-content: flex-end;
  padding: 18px;
`;

export const FlexContainer = styled(FlexCommon)`
  width: 270px;
  color: #878a99;
  button i {
    margin: 0 !important;
  }
  input {
    width: 60px;
    border: 1px solid var(--input-border);
    padding: 0.5rem 0.9rem;
    border-radius: 4px;
    color: var(--text-body);
  }
`;
