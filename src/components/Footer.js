import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/fithub-logo.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack
        sx={{ gap: { xs: "20px", lg: "40px" } }}
        alignItems="center"
        px="40"
        pt="24px"
      >
        <img
          src={Logo}
          className="header_logo"
          alt="logo"
          width="90px"
          height="80px"
        />
        <Typography
          sx={{ textAlign: { xs: "center" } }}
          variant="h5"
          mt="20px"
          pb="40px"
        >
          Made with ❤️ by Chidume Kenneth
        </Typography>
      </Stack>
    </Box>
  );
};
export default Footer;
