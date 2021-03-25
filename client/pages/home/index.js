import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Layout from "../../src/Components/Layout/Layout";
import Link from "next/link";
import clsx from "clsx";
import Navigation from "../../src/Components/Navigation/Navigation";

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
        <Container className={clsx(classes.root)}>
          <Grid item>
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
