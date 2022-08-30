import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FlexCommon } from "../common/global/global";
import { Profile, Wrapper } from "./header.e";
import Logout from "./logout/logout";
import MenuResizer from "./menu-resizer/menu-resizer";
import FullScreen from "./full-screen/full-screen";
import DarkMode from "./dark-mode/dark-mode";

export default function Header() {
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("userData")).username;

  useEffect(() => {
    if (!username) {
      localStorage.setItem("userData", "");
      navigate(0);
    }
  }, [username]);

  return (
    <Wrapper>
      <MenuResizer />
      <FlexCommon>
        <FullScreen />
        <DarkMode />
        <Logout />
        <Profile>
          <p>
            <b>{username}</b>
            <span>Moderator</span>
          </p>
        </Profile>
      </FlexCommon>
    </Wrapper>
  );
}
