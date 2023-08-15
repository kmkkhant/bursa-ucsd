import React from "react";
import { Typography, Container, Grid, Box, Button } from "@mui/material";
import wallpaper from "./Images/wallpaper.jpeg";
import { homeStyles } from "./styles";
import mmcartoon from "./Images/mmcartoon.png";
import About from "../About/About";

const Home = () => {
  const styles = homeStyles();

  return (
    <Box sx={styles.root} style={{ overflow: "hidden" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={1}
          marginTop="10%"
        >
          <Grid item md={5}>
            <Box>
              <Typography variant="h2" color="white" marginY="4%">
                Mingalarpar
              </Typography>
              <Typography variant="body1" color="white">
                At BURSA, we strive to promote and celebrate Burmese culture at
                UC San Diego. Anyone is welcome to join us at our events!
              </Typography>
              <Button
                variant="outlined"
                sx={{ borderColor: "white", color: "white", marginTop: "4%" }}
              >
                See All Events
              </Button>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box>
              <img src={mmcartoon} alt="cartoon" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h2" color="white" marginY="4%" textAlign="center">
        Upcoming Events
      </Typography>
      <Typography variant="h2" color="white" marginY="4%" textAlign="center">
        Archives
      </Typography>
      <Typography variant="h2" color="white" marginY="4%" textAlign="center">
        Meet the Team
      </Typography>
      <Typography variant="h2" color="white" marginY="4%" textAlign="center">
        Contact Us
      </Typography>
    </Box>
  );
};
export default Home;
