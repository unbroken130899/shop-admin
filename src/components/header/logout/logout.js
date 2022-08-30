import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../common/button/button";
import Modal from "../../common/modal/modal";

export default function Logout() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Button
        ghost="secondary"
        icon="header"
        text={<i className="fa-solid fa-arrow-right-from-bracket"></i>}
        onClick={() => setModal(true)}
      />
      {modal && (
        <Modal width="400px" setOpen={()=>setModal(false) } open={modal}>
            <h5>Are you sure ?</h5>
            <p className="text">
              Do you want to leave the <br /> website?
            </p>
          <Buttons> 
            <Button
              onClick={() => setModal(false)}
              text="Close"
              color="light"
            />
            <Button
              onClick={() => {
                localStorage.removeItem("userData");
                window.location.reload(false);
              }}
              text="Log out"
              color="danger"
            />
          </Buttons>
        </Modal>
      )}
    </>
  );
}

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  gap: 16px;
  div {
    width: 38%;
    display: flex;
    justify-content: space-between;
  }
`;
