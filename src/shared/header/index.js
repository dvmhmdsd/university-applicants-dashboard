import React from "react";
import { connect } from "react-redux";
import { setLanguageKey } from "state-management/actions/languageActions";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";

import placeholder from "assets/placeholder.png";
import logo from "assets/logo.png";

import COLORS from "globals/style-constants";

function Header(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header: {
      color: COLORS.MAIN_TEXT,
      backgroundColor: COLORS.MAIN_BG,
      padding: "0.7rem 0 0.3rem"
    },
    avatarBg: {
      backgroundColor: COLORS.SEC_TEXT,
    },
    btn__wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    },
    mail__link: {
      color: COLORS.MAIN_TEXT,
      textDecoration: "none",
      display: "block",
      marginTop: "0.6rem"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    btnLight: {
      backgroundColor: COLORS.SEC_TEXT,
      color: COLORS.MAIN_BG,
      marginRight: "0.8rem",
    },
    btnDark: {
      backgroundColor: COLORS.MAIN_TEXT,
      color: COLORS.MAIN_BG,
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
  }));
  const classes = useStyles();

  const changeLanguage = (key) => props.setLanguageKey(key);

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
              <a href="mailto:contactus@mcst.edu.sa" className={classes.mail__link}>contactus@mcst.edu.sa</a>
            </section>
            <Typography variant="h6" className={classes.title}>
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </Typography>
            <Button disableElevation>
              <Avatar src={placeholder} className={classes.avatarBg} />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

let mapStateToProps = (store) => ({
  lang: store.lang,
});

export default connect(mapStateToProps, { setLanguageKey })(Header);
