import React from "react";
import Drawer from "@material-ui/core/Drawer";

import List from "./list";

export default function SideDrawer({ anchor, toggleDrawer, openStatus }) {
  return (
    <React.Fragment>
      <Drawer
        anchor={anchor}
        open={openStatus}
        onClose={toggleDrawer(false)}
      >
        <List
          anchor={anchor}
          toggleDrawer={toggleDrawer}
        />
      </Drawer>
    </React.Fragment>
  );
}
