import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#01a8a5"
    }
  }
});

function AppTheme(WrappedComponent) {
  return props => (
    <MuiThemeProvider theme={theme}>
      <WrappedComponent {...props} />
    </MuiThemeProvider>
  );
}

export default AppTheme;
