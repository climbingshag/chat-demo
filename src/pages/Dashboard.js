import React from "react";
import TopNavBar from "../containers/TopNavBar";
import ContactsAndChatContainer from "../containers/ContactsAndChatContainer";
import { LogoutButton } from "../containers/NavButtons";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { Authorized } from "../containers/AuthRedirects";

const Dashboard = () => (
  <div>
    <Authorized>
      <TopNavBar>
        <LogoutButton />
      </TopNavBar>
      <Divider />
      <ContactsAndChatContainer />
    </Authorized>
  </div>
);

export default Dashboard;
