import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
const SimilarExercises = ({ targetMusclesExercises, equipmentExercises }) => {
  return (
    <Box p="20px" sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography
        sx={{
          fontSize: { xs: "2rem" },
          textAlign: { xs: "center" },
          mt: { xs: "70px" },
        }}
        variant="h3"
        mb="33px"
      >
        Exercise that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMusclesExercises.length ? (
          <HorizontalScrollbar data={targetMusclesExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography
        sx={{
          fontSize: { xs: "2rem" },
          textAlign: { xs: "center" },
          mt: { xs: "90px" },
        }}
        variant="h3"
        mb="33px"
      >
        Exercise that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};
export default SimilarExercises;
