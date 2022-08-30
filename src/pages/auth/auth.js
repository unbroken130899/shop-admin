import axios from "axios";
import React, { useContext, useState } from "react";
import Button from "../../components/common/button/button";
import { AuthContext } from "../../context/auth";
import {
  AuthCard,
  Background,
  Center,
  Form,
  FormItem,
  Overlay,
  Shape,
  Wrapper,
} from "./auth.e";

export default function Auth() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLogged } = useContext(AuthContext);

  const login = () => {
    axios
      .post("https://beeto.in1.uz/api/moderator/login", {
        username: userName,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res.data.data));
        setIsLogged(true);
      })
      .catch((e) => {
        alert("Incorrect");
      });
  };
  return (
    <Wrapper>
      <Background>
        <Overlay />
        <Shape>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1440 120"
          >
            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
          </svg>
        </Shape>
      </Background>
      <AuthCard>
        <Center>
          <h5>Welcome back!</h5>
          <p>Sign in to continue to my Website</p>
          <Form autoComplete="off" onSubmit={() => login()}>
            <FormItem>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormItem>
            <FormItem>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormItem>
            <Button
              type="submit"
              onClick={() => login()}
              text="Sign In"
              color="warning"
              full
            />
          </Form>
        </Center>
      </AuthCard>
    </Wrapper>
  );
}
