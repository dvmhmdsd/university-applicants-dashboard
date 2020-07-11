import React from "react";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import COLORS from "globals/style-constants";
import { translate } from "translation/translate";

import { connect } from "react-redux";

const ListComponent = ({ anchor, toggleDrawer, lang }) => {
  const useStyles = makeStyles({
      list: {
        width: 350,
      },
      fullList: {
        width: "auto",
      },
      list__item: {
        color: COLORS.SEC_TEXT,
        padding: "1rem",
        cursor: "pointer"
      },
      list__icon: {
        color: COLORS.SEC_TEXT,
        order: lang.key === "en" ? 1 : 2,
      },
      list__text: {
        textTransform: "capitalize",
        order: lang.key === "en" ? 2 : 1,
      },
    }),
    classes = useStyles();

  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          {
            text: translate("applicants"),
            icon: <SupervisorAccountIcon fontSize="large" />,
            selected: true,
          },
          {
            text: translate("dates"),
            icon: <EventNoteIcon fontSize="large" />,
          },
          {
            text: translate("sign out"),
            icon: <ExitToAppIcon fontSize="large" />,
          },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            className={classes.list__item}
            selected={item.selected}
          >
            <ListItemIcon className={classes.list__icon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} className={classes.list__text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

let mapStateToProps = (store) => ({
  lang: store.lang,
});

export default connect(mapStateToProps)(ListComponent);
