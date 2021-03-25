import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Layout from "../../src/Components/Layout/Layout";
import clsx from "clsx";
import Navigation from "../../src/Components/Navigation/Navigation";
import HomeForm from "../../src/Components/Home/HomeForm";
import HomeContent from "../../src/Components/Home/HomeContent";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  gird: {
    margin: `${theme.spacing(2)}px 0px`,
  },
  typo: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navigation />
      <Layout title="Welcome to AIR-CNC">
        <Container maxWidth="lg" className={clsx(classes.root)}>
          <Box mt={10} mb={3}>
            <Typography variant="h5" className={clsx(classes.typo)}>
              <Box fontWeight="fontWeightBold">Where do you want to go</Box>
            </Typography>
          </Box>
          <Grid item container direction="row" className={clsx(classes.gird)}>
            <HomeForm />
            <HomeContent />
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
