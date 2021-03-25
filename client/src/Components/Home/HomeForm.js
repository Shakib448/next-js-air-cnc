import { Box, Grid, Typography } from "@material-ui/core";

const HomeForm = () => {
  return (
    <Grid item container md={4} lg={4} sm={12}>
      <Typography variant="h5">
        <Box fontWeight="fontWeightBold">Where do you want to go</Box>
      </Typography>
    </Grid>
  );
};

export default HomeForm;
