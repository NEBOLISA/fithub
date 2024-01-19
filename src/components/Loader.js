import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin, ThreeDots } from "react-loader-spinner";
const Loader = ({ isExerciseVideos }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      {isExerciseVideos ? (
        <ThreeDots color="gray" />
      ) : (
        <InfinitySpin color="gray" />
      )}
    </Stack>
  );
};
export default Loader;
