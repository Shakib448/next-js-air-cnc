import { Grid, makeStyles, Paper } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    width: "100%",
    margin: `${theme.spacing(2)}px 0px`,
    borderRadius: "10px",
  },
}));

const HomeForm = () => {
  const classes = useStyles();
  return (
    <Grid item container md={4} lg={4} sm={12}>
      <Paper className={clsx(classes.paper)}>
        <h1>Hello World</h1>
      </Paper>
    </Grid>
  );
};

export default HomeForm;
