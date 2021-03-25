import { Grid, makeStyles, Paper } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    width: "95%",
    margin: `${theme.spacing(2)}px 0px`,
    borderRadius: "10px",
    boxShadow: "5px 5px 20px lightgray",
  },
  datePickerArea: {
    width: "47%",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    margin: `${theme.spacing(2)}px ${theme.spacing(1)}px 0px 0px`,
    borderRadius: "10px",
    boxShadow: "5px 5px 20px lightgray",
  },
  formArea: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));

const HomeForm = () => {
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
        <h1>Hello World</h1>
      </Paper>
      <Paper className={clsx(classes.datePickerArea)}>
        <h1>Hello World</h1>
      </Paper>
    </Grid>
  );
};

export default HomeForm;
