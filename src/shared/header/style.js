import COLORS from "globals/style-constants";

export default (theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    color: COLORS.MAIN_TEXT,
    backgroundColor: COLORS.MAIN_BG,
    padding: "0.7rem 0 0.3rem",
  },
  avatarBg: {
    backgroundColor: COLORS.SEC_TEXT,
  },
  btn__wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  mail__link: {
    color: COLORS.MAIN_TEXT,
    textDecoration: "none",
    display: "block",
    marginTop: "0.6rem",
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
});
