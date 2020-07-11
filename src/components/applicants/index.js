import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import COLORS from "globals/style-constants";

import { connect } from "react-redux";
import { getApplicants } from "state-management/actions/applicantsActions";
import ApplicantsTable from "shared/table";
import { translate } from "translation/translate";

function Applicants({ applicants, getApplicants, lang }) {
  useEffect(() => {
    getApplicants();
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: "87%",
      margin: "auto",
      marginTop: "3rem",
      boxShadow: "0 0 2px 2px #ccc",
    },
    tabs__bar: {
      //   flexDirection: lang === "ar" ? "row-reverse" : "row",
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
    translate("all"),
    translate("under review"),
    translate("initial acceptance"),
    translate("conditional acceptance"),
    translate("rejected"),
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
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {statuses.map((status) => (
            <Tab label={status} key={status} />
          ))}
        </Tabs>
      </AppBar>
      {statuses.map((status, index) => (
        <TabPanel value={tabValue} index={index} key={status}>
          <ApplicantsTable
            applicants={applicants}
            filterKey={status !== translate("all") ? status : null}
            lang={lang}
          />
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
  applicants: store.applicants.list,
  lang: store.lang.key,
});

export default connect(mapStateToProps, { getApplicants })(Applicants);
