import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6897bb"
    },
    secondary: {
      main: "#f37054"
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
