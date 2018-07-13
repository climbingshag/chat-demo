import React, { Component } from "react";
import TopNavBar from "../containers/TopNavBar";
import { LogoutButton } from "../containers/NavButtons";
import PropTypes from "prop-types";
import { Authorized, NotAuthorized } from "../containers/AuthRedirects";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Authorized>
          <TopNavBar>
            <LogoutButton />
          </TopNavBar>
        </Authorized>
      </div>
    );
  }
}

export default Dashboard;
