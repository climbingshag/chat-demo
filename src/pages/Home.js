import React from "react";
import TopNavBar from "../containers/TopNavBar";
import { LoginButton, SignupButton } from "../containers/NavButtons";
import styled from "styled-components";
import { NotAuthorized } from "../containers/AuthRedirects";

const HomeContent = styled.div`
  padding-top: 2em;
  text-align: center;
  font-size: 2em;
`;

const Home = props => (
  <div>
    <NotAuthorized>
      <TopNavBar>
        <LoginButton />
        <SignupButton />
      </TopNavBar>
      <HomeContent>
        Welcome to simple-chat! The least used chat app on the web.
      </HomeContent>
    </NotAuthorized>
  </div>
);

export default Home;
