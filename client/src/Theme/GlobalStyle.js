import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  "@global": {
    "*:focus": {
      outline: 0,
    },
    ".MuiTypography-root": {
      fontFamily: "Poppins, sans-serif !important",
      textTransform: "none !important",
    },
    ".MuiButtonBase-root": {
      fontFamily: "Poppins, sans-serif !important",
      fontWeight: "bold ",
      textTransform: "none !important",
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
    ".MuiPickersModal-dialog": {
      "&:first-child": {
        padding: "10px !important",
      },
    },
    ".MuiDialog-paperWidthSm": {
      maxWidth: "30% !important",
    },
    ".MuiPickersBasePicker-pickerView": {
      maxWidth: "none !important",
    },
    "p.MuiTypography-root.MuiTypography-body1.MuiTypography-alignCenter": {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "span.MuiTypography-root.MuiPickersCalendarHeader-dayLabel.MuiTypography-caption": {
      fontSize: "1rem",
      fontWeight: "bold",
    },
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
