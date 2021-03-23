import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import Layout from "../src/Components/Layout";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    height: "100vh",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Layout title="Welcome to Home">
      <Container>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={clsx(classes.root)}
        >
          <Typography variant="h2">AIR CNC</Typography>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
