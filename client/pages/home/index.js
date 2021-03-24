import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Layout from "../../src/Components/Layout";
import Link from "next/link";
import clsx from "clsx";
import Navigation from "../../src/Components/Navigation";
import MobileNavigation from "../../src/Components/MobileNavigation";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    height: "100vh",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navigation />
      <Layout title="Welcome to AIR-CNC">
        <Container>
          <Grid className={clsx(classes.root)}>
            <Typography variant="h1">Welcome to the home</Typography>
            <Link href="/">
              <Button>Back</Button>
            </Link>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
