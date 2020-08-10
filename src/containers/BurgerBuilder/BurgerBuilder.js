import React, { Component } from "react";

import Aus from "../../hos/Aus";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aus>
        <div>
          <Burger />
        </div>
        <div>Build Controls</div>
      </Aus>
    );
  }
}

export default BurgerBuilder;
