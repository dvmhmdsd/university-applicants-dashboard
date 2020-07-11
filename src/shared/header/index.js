import React, { useState } from "react";
import { connect } from "react-redux";
import { setLanguageKey } from "state-management/actions/languageActions";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import logo from "assets/logo.png";

import styleHeader from "./style";
import SideDrawer from "shared/drawer";

function Header({ lang, setLanguageKey }) {
  const useStyles = makeStyles((theme) => styleHeader(theme, lang.key));
  const classes = useStyles();

  const [drawerStatus, setDrawerStatus] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerStatus(open);
  };

  const changeLanguage = (key) => setLanguageKey(key);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Container maxWidth="xl">
          <Toolbar>
            <section className={classes.btn__wrapper}>
              <div>
                <Button
                  variant="contained"
                  className={classes.btnLight}
                  disableElevation
                  onClick={() => changeLanguage("ar")}
                >
                  AR
                </Button>
                <Button
                  variant="contained"
                  className={classes.btnDark}
                  disableElevation
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </Button>
              </div>
              <Link
                href="mailto:contactus@mcst.edu.sa"
                className={classes.mail__link}
                color="inherit"
              >
                contactus@mcst.edu.sa
              </Link>
            </section>
            <Typography variant="h6" className={classes.title}>
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </Typography>
            <Button
              className={classes.avatar__item}
              disableElevation
              onClick={() => setDrawerStatus(true)}
            >
              <AccountCircleIcon fontSize="large" color="primary" />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <SideDrawer
        toggleDrawer={toggleDrawer}
        openStatus={drawerStatus}
        anchor={lang.key === "en" ? "right" : "left"}
      />
    </div>
  );
}

let mapStateToProps = (store) => ({
  lang: store.lang,
});

export default connect(mapStateToProps, { setLanguageKey })(Header);
