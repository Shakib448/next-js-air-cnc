import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, ButtonGroup } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  linkButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    color: "#2DDE8D",
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={clsx(classes.root)}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h5" className={clsx(classes.title)}>
            <Box fontWeight="fontWeightBold">AIR CNC</Box>
          </Typography>
          <ButtonGroup color="inherit" className={clsx(classes.linkButton)}>
            <Box mr={2}>
              <Button>Host your Home</Button>
            </Box>
            <Box mr={2}>
              <Button>Host your experience</Button>
            </Box>
            <Box mr={2}>
              <Button>Help</Button>
            </Box>
            <Box mr={2}>
              <Button>Log in</Button>
            </Box>
            <Box mr={2}>
              <Button color="inherit" variant="contained">
                Sign up
              </Button>
            </Box>
          </ButtonGroup>

          <IconButton
            edge="end"
            className={clsx(classes.menuButton)}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
