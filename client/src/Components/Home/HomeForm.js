import { Grid, makeStyles, Paper } from "@material-ui/core";
import clsx from "clsx";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    width: "95%",
    margin: `${theme.spacing(1)}px 0px`,
    borderRadius: "10px",
    boxShadow: "5px 5px 20px lightgray",
  },
  datePickerArea: {
    width: "47%",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    margin: `${theme.spacing(1)}px ${theme.spacing(1)}px 0px 0px`,
    borderRadius: "10px",
    boxShadow: "10px 10px 20px lightgray",
  },
  formArea: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));

const HomeForm = () => {
  const [arivalDate, setArivalDate] = useState(new Date());
  const [depatureDate, setDepatureData] = useState(new Date());

  const depature = depatureDate.setDate(arivalDate.getDate() + 3);

  const handleArivalDateChange = (date) => {
    setArivalDate(date);
  };
  const handleDepatureDateChange = (date) => {
    setDepatureData(date);
  };
  const classes = useStyles();
  return (
    <Grid
      item
      container
      md={12}
      lg={4}
      sm={12}
      className={clsx(classes.formArea)}
    >
      <Paper className={clsx(classes.paper)}>
        <h1>Hello World</h1>
      </Paper>
      <Paper className={clsx(classes.datePickerArea)}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            margin="normal"
            id="date-picker-dialog"
            label="Arival"
            format="dd/MM/yyyy"
            value={arivalDate}
            onChange={handleArivalDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </MuiPickersUtilsProvider>
      </Paper>
      <Paper className={clsx(classes.datePickerArea)}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            margin="normal"
            id="date-picker-dialog"
            label="Depature"
            format="dd/MM/yyyy"
            value={depature}
            onChange={handleDepatureDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </MuiPickersUtilsProvider>
      </Paper>
    </Grid>
  );
};

export default HomeForm;
