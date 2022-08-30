import styled, { createGlobalStyle } from "styled-components";
import CheckboxIcon from "../../../assets/images/icon/checkbox.svg";

export const GlobalStyle = createGlobalStyle`
  :root {
    --text: ${(props) => (props.isLight ? "#485056" : "#ced4d9")};
    --dark: ${(props) => (props.isLight ? "#212529" : "#fff")};
    --light: ${(props) => (props.isLight ? "#f3f6f9" : "#2a2f34")};
    --wrapper: ${(props) => (props.isLight ? "#3f5089" : "#212529")};
    --link: ${(props) => (props.isLight ? "#abb9e8" : "#878a99")};
    --gray-700: ${(props) => (props.isLight ? "#495057" : "#ced4da")};
    --topbar-user-bg: ${(props) => (props.isLight ? "#f3f3f9" : "#31373c")};
    --body: ${(props) => (props.isLight ? "#f3f3f8" : " #1b1d21")};
    --header: ${(props) => (props.isLight ? "#ffffff" : "#292e32")};
    --heading: ${(props) => (props.isLight ? "#495057" : "#ced4da")};
    --pagename: ${(props) => (props.isLight ? "#ffffff" : "#212529")};
    --border-color: ${(props) => (props.isLight ? "#e9ebec" : "#32383e")};
    --input-border: ${(props) => (props.isLight ? "#ced4da" : "#33393f")};
    --input-bg: ${(props) => (props.isLight ? "#fff" : "#262a2f")};
    --text-body: ${(props) =>
      props.isLight ? "rgba(33,37,41,1)" : "rgba(206,212,218,1)"};
    --card-bg: ${(props) => (props.isLight ? "#fff" : "#212529")};
    --banner-card: ${(props) => (props.isLight ? "#b8d5f1 " : "#4f5461")};
    --blue: #3577f1;
    --indigo: #405189;
    --purple: #6559cc;
    --pink: #f672a7;
    --red: #f06548;
    --orange: #f1963b;
    --yellow: #f7b84b;
    --green: #0ab39c;
    --teal: #02a8b5;
    --cyan: #299cdb;
    --white: #fff;
    --gray: #878a99;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  body {
    font-size: 13px;
    background-color: var(--body);
  }
  html {
    scroll-behavior: smooth;
  }
  input {
    outline: none;
    background-color: transparent;
    border: none;
  }
  ul, li {
    list-style: none;
  }
  button {
    border: none;
    outline: none;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    color: var(--heading);
  }
  input[type=checkbox] {
    -webkit-print-color-adjust: exact;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 3px;
    background-color: var(--input-bg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid var(--input-border);
    color-adjust: exact;
    height: 1.1em;
    margin-top: 0.2em;
    vertical-align: top;
    width: 1.1em;
    cursor: pointer;
    margin-right: 8px;
  }
  input[type=checkbox]:checked {
    background-color: #405189;
    border-color: #405189;
  }
  input[type=checkbox]:checked {
    background-image: url(${CheckboxIcon});
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
    td {
      position: relative;
    }
    @media (max-width: 800px) {
      padding-right: 10%;
      td, th {
        padding: 12px 20px !important;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  b {
      font-weight: 600;
  }
  p {
    color: ${(props) => props.gray && "#878a99"};
  }
  thead {
    color: #878a99;
    font-size: 13px;
    border-bottom: 1px solid var(--border-color);
    th, td {
      padding: 0.75rem 0;
      text-align: left;
    }
    th:first-child {
      padding: 0.75rem 1.2rem;
    }
    tr {
      background-color: var(--light);
    }
  }
  img {
    &::before, &::after {
      display: none;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  .form-control {
    appearance: none;
    background-clip: padding-box;
    background-color: #fff;
    background-color: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;
    color: #212529;
    color: var(--text-body);
    display: block;
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.5rem 0.9rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 100%;
    resize: none;
    outline: none;
    &::placeholder {
      color: #878a99;
    }
    &:focus {
      border-color: var(--indigo);
    }
    &:disabled {
      background-color: var(--light);
    }
  }
  textarea.form-control {
    height: 120px;
  }
  .red {
    color: var(--red);
  }
  .FullScreen {
    overflow: ${(props) => (props.isFull ? "auto" : "visible")};
  }
  table {
    padding: 15px;
    width: 100%;
    color: var(--text-body);
    td {
      font-size: 12px;
      padding: 10px 0;
    }
    tr {
      padding: 20px 4px;
      &:hover {
        background-color: var(--light);
      }
    }
  }
  /* .rdrDateDisplayWrapper, .rdrStaticRange, .rdrDefinedRangesWrapper, .rdrMonthAndYearWrapper, .rdrDateInput, {
    background-color: var(--pagename);
    color: var(--text-body);
    /* border-bottom: 1px solid var(--border-color); */
  } */
  .rdrStaticRange {
    border-bottom: 1px solid var(--border-color);
    .rdrStaticRangeLabel:hover {
      background-color: var(--light);
    }
  }
  .rdrDateRangePickerWrapper {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    margin: 20px auto;
    margin-bottom: 40px;
  }
  .tox-notifications-container, .tox-statusbar {
    display: none !important;
  }
  .mobile .rdrDefinedRangesWrapper {
    display: none
  }
  .responsive-table {
    @media (max-width: 800px) {
      overflow-x: auto;
      width: 99%;
      margin-top: 10px;
    }
  }
  .gray {
    color: #878a99;
  }
  .select__control--is-disabled {
    background-color: var(--light) !important;
    color: #000 !important;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: var(--body);
`;

export const Flex = styled.div`
  display: flex;
`;

export const FlexCommon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageWrapper = styled.div`
  padding: 30px 25px;
  padding-bottom: 60px;
`;

export const Grid1x4 = styled.div`
  display: grid;
  grid-gap: 24px;
  align-items: start;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Grid3x1 = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 3fr 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Grid4 = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const Grid2 = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Grid3 = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Grid1 = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
`;

export const FlexBg = styled.div`
  border-radius: 5px;
  background-color: var(--pagename);
  box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
  padding-bottom: 20px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  border-radius: 5px;
  background-color: var(--pagename);
  box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
`;

export const CardHead = styled.div`
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  h5 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: var(--heading-color);
    margin-bottom: 0;
  }
  i {
    width: 30px;
    font-size: 16px;
    cursor: pointer;
    color: var(--text);
  }
  h2 {
    margin-bottom: 0;
    word-spacing: 4px;
    font-size: 17px;
  }
`;

export const CardBody = styled.div`
  padding: 16px;
  color: var(--text-body);
  &.p0 {
    padding: 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 13px;
    li {
      span {
        color: #878a99;
        margin-right: 2px;
      }
      i {
        font-size: 15px;
        width: 24px;
      }
      &.flex {
        display: flex;
        gap: 6px;
      }
    }
  }
`;
