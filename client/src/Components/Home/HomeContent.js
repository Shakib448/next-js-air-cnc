import { Box, Grid, Typography } from "@material-ui/core";

const HomeContent = () => {
  return (
    <Grid item container md={8} lg={8} sm={12}>
      <Typography variant="h5">
        <Box fontWeight="fontWeightBold">Where do you want to go</Box>
      </Typography>
    </Grid>
  );
};

export default HomeContent;
