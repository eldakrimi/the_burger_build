import React from "react";

import Aus from "../../hos/Aus";
import classes from "./Layout.css";

const layout = (props) => (
  <Aus>
    <div>Toolbar, SideDrawer and Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aus>
);

export default layout;
