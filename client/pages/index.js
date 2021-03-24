import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Layout from "../src/Components/Layout";
import clsx from "clsx";
import ReactTypingEffect from "react-typing-effect";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    height: "100vh",
  },
  fonts: {
    color: "#2DDE8D",
  },
  main: {
    background: "#fefefa",
  },
  btn: {
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    background: "linear-gradient(90deg, #2BDE8C, #78EF4E)",
    textTransform: "none",
    color: "#fff",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Layout title="Welcome">
      <Container maxWidth={false} className={clsx(classes.main)}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          direction="column"
          className={clsx(classes.root)}
        >
          <Typography variant="h2">
            <Box fontWeight="fontWeightBold" className={clsx(classes.fonts)}>
              AIR CNC
            </Box>
          </Typography>
          <ReactTypingEffect
            text={["Welcome to the AIR-CNC"]}
            cursorRenderer={(cursor) => (
              <Typography variant="h3" gutterBottom>
                {cursor}
              </Typography>
            )}
            displayTextRenderer={(text, i) => {
              return (
                <Typography variant="h3">
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <Box
                        component="span"
                        key={key}
                        style={
                          i % 2 === 0
                            ? { color: "#2DDE8D" }
                            : { color: "#bfc1c2" }
                        }
                      >
                        {char}
                      </Box>
                    );
                  })}
                </Typography>
              );
            }}
          />
          <Link href="/home">
            <Button variant="contained" className={clsx(classes.btn)}>
              <Typography variant="h6">
                <Box fontWeight="fontWeightBold">Welcome</Box>
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
