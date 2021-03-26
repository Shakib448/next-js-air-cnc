import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  count: {
    fontSize: "25px !important",
    fontWeight: "bold !important",
    fontFamily: "Poppins, sans-serif !important",
    padding: `0px ${theme.spacing(1)}px`,
  },
}));

const Quantity = ({ count, setCount, title }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item>
        <Typography>
          <Box fontWeight="fontWeightBold">{title}</Box>
        </Typography>
      </Grid>
      <Grid item>
        <IconButton disabled={count === 0} onClick={() => setCount(count - 1)}>
          <Typography>
            <RemoveIcon style={{ fontSize: "30px" }} />
          </Typography>
        </IconButton>
        <Box component="span" className={clsx(classes.count)}>
          {count}
        </Box>
        <IconButton onClick={() => setCount(count + 1)}>
          <Typography>
            <AddIcon style={{ fontSize: "30px" }} />
          </Typography>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Quantity;
