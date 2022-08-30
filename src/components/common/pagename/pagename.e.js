import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px 24px;
  background-color: var(--pagename);
  border-bottom: 1px solid var(--body);
  border-top: 1px solid var(--body);
  display: flex;
  position: relative;
  padding-left: 60px;
  h2 {
    font-size: 15px;
    text-transform: uppercase;
    color: var(--heading);
    font-weight: 700;
    margin-bottom: 0;
  }
  p {
    margin-right: 20px;
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 22px;
    transform: translateY(-48%);
    color: #878a99;
  }
`;
