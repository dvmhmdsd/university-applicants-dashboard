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

import styleHeader from "./style";

function Header(props) {
  console.log(props.lang)
  const useStyles = makeStyles((theme) => styleHeader(theme, props.lang.key));
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
              <a
                href="mailto:contactus@mcst.edu.sa"
                className={classes.mail__link}
              >
                contactus@mcst.edu.sa
              </a>
            </section>
            <Typography variant="h6" className={classes.title}>
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </Typography>
            <Button className={classes.avatar__item} disableElevation>
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
