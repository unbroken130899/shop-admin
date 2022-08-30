import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: 20px;
  input {
    display: none;
  }
  .personal-avatar {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100px;
  }
  figcaption {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: all ease-in-out 0.15s;
    cursor: pointer;
  }
  figcaption:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.4);
  }
  figcaption i {
    font-size: 50px;
    color: #f8f8f8;
    opacity: 0.8;
  }
`;
