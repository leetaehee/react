import React, { Component } from "react";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponent";

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />
      </div>
    );
    /*
    return (
      <div>
        <CSSModule />
      </div>
    );
    */
    /*
    return (
      <div>
        <SassComponent />
      </div>
    );
    */
  }
}

export default App;
