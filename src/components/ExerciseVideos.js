import React from "react";
import youtubeIcon from "../assets/icons/youtube-icon.png";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return <Loader isExerciseVideos />;
  return (
    <Box sx={{ marginTop: { lg: "100px", sx: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { xs: "1.8rem" }, textAlign: { xs: "center" } }}
        variant="h3"
        mb="33px"
      >
        Watch{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
          }}
        >
          {name}
        </span>{" "}
        exercise Videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "80px", sx: "0px" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            style={{ position: "relative" }}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel=" noreferrer"
          >
            <img
              style={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              src={youtubeIcon}
              alt="youtube_icon"
            />
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};
export default ExerciseVideos;
