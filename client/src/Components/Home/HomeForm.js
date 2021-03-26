import {
  Grid,
  makeStyles,
  Paper,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    width: "95%",
    margin: `${theme.spacing(1)}px 0px`,
    borderRadius: "10px",
    boxShadow: "5px 5px 20px lightgray",
  },
  datePickerArea: {
    width: "46.5%",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    margin: `0px ${theme.spacing(1)}px 0px 0px`,
    borderRadius: "10px",
    boxShadow: "10px 10px 20px lightgray",
  },
  formArea: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  form: {
    width: "100%",
    margin: `${theme.spacing(1)}px 0px`,
  },
  accordion: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    width: "95%",
    margin: `${theme.spacing(1)}px 0px`,
    borderRadius: "10px",
    boxShadow: "5px 5px 20px lightgray",
    border: "none",
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
        <TextField
          className={clsx(classes.form)}
          id="outlined-basic"
          label="Add city, Location or Landmark"
          variant="outlined"
        />
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
      {/* <Paper className={clsx(classes.paper)}> */}
      <Accordion square className={clsx(classes.accordion)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* </Paper> */}
    </Grid>
  );
};

export default HomeForm;
