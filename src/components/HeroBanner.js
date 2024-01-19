import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage2 from "../assets/images/HeroBannerImage2.png";
const HeroBanner = () => {
  return (
    <Box
      className="hero_box"
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        FitHub
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Grind, Glow
        <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
        variant="contained"
        color="error"
        href="#exercises"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage2}
        alt="bannerImage"
        className="hero-banner-img"
      />
    </Box>
  );
};
export default HeroBanner;
