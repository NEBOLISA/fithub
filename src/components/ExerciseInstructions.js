import React from "react";
import { Box, Stack, Typography } from "@mui/material";
const ExerciseInstructions = ({ exerciseDetail }) => {
  return (
    <Stack p="20px" mt="40px">
      <Typography
        sx={{ fontSize: { xs: "2rem" }, textAlign: { xs: "center" } }}
        mb="10px"
        variant="h3"
      >
        Instructions
      </Typography>
      {exerciseDetail?.instructions?.map((item, index) => (
        <Stack mb="8px" direction="row" gap="4px">
          <Typography variant="h6">{index + 1}.</Typography>
          <Typography variant="h6">{item}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};
export default ExerciseInstructions;
