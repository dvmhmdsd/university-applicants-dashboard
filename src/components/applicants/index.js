import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import COLORS from "globals/style-constants";

import { connect } from "react-redux";

function Applicants({ applicants }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: "87%",
      margin: "auto",
      marginTop: "3rem",
      boxShadow: "0 0 2px 2px #ccc",
    },
    tabs__bar: {
      backgroundColor: COLORS.MAIN_BG,
      color: COLORS.MAIN_TEXT,
      boxShadow: "none",
    },
  }));
  const classes = useStyles();

  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const statuses = [
    "All",
    "under review",
    "initial acceptance",
    "conditional acceptance",
    "rejected",
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabs__bar}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="Applicants data"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {statuses.map((status) => (
            <Tab label={status} key={status} />
          ))}
        </Tabs>
      </AppBar>
      {statuses.map((status, index) => (
        <TabPanel value={tabValue} index={index}>
          {status}
        </TabPanel>
      ))}
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

let mapStateToProps = (store) => ({
  applicants: store.applicants,
});

export default connect(mapStateToProps)(Applicants);
