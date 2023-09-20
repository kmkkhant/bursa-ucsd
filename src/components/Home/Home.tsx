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
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginX: {xs: '0%', sm: "10%"}
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={1}
          marginTop="10%"
        >
          <Grid item xs={12} sm={12} md={7} sx={{marginX: {xs: '8%', sm: "0%"}}}>
            <Box>
              <Typography variant="h2" marginY="4%">
                Mingalarpar
              </Typography>
              <Typography variant="body1">
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
          <Grid item xs={12} sm={12} md={5}>
            <Box>
              <img src={mmcartoon} alt="cartoon" style={{width: '100%'}}/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Home;
