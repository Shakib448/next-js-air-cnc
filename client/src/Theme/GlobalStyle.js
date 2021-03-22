import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  "@global": {
    "*:focus": {
      outline: 0,
    },
    "h1,h2,h3,h4,h5,h6": {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "bold",
    },

    ".container": {
      width: "100%",
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      marginRight: "auto",
      marginLeft: "auto",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 540,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 720,
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 1170,
      },
    },
    ".row": {
      display: "flex",
      flexWrap: "wrap",
      marginRight: -theme.spacing(2),
      marginLeft: -theme.spacing(2),
    },
    ".container-fluid": {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370,
    },

    ".no-decoration": {
      textDecoration: "none",
    },

    ".capitalize": {
      textTransform: "capitalize",
    },

    ".MuiInput-input": {
      paddingLeft: "10px !important",
    },
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
