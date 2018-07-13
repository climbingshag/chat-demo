import React, {Component} from "react";
import Snackbar from "@material-ui/core/Snackbar";

function withErrorToast(WrappedComponent) {
  return class WithErrorToast extends Component {
    constructor(props){
      super(props);
      this.state = {errorMessage:'', barIsOpen:false}
    }
    showError = (errorMessage) => { 
      this.setState({errorMessage, barIsOpen:true});
    }
    hideError = () => {
      this.setState({barIsOpen:false});
    }
    render() {
      return (
        <div>
          <WrappedComponent showError={this.showError} {...this.props} />
          <Snackbar message={this.state.errorMessage} open={this.state.barIsOpen} onClose={this.hideError} autoHideDuration={6000}/>
        </div>
      )
    }
  };
}

export default withErrorToast;