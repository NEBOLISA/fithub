import React, { useEffect, useState } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=900",
        exerciseOptions
      );

      const searchedExercise = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercise);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Discover Your Next Workout
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: { xs: "46px", lg: "56px" },
            position: "absolute",
            right: 0,
            mt: { xs: "10px" },
            left: { xs: "50%" },
            transform: { xs: "translateX(-50%)" },
            display: { xs: "flex" },
            alignSelf: { xs: "center" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          position: "relative",
          width: "100%",

          p: "20px",
          pl: "0",
          // ml: "-32px",
          ml: { xs: "0", lg: "-32px" },
          pr: "0",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "1.8rem" }, textAlign: { xs: "center" } }}
          mb="46px"
          variant="h3"
          alignSelf="start"
          ml="20px"
        >
          Exercise Category
        </Typography>
        {bodyParts.length ? (
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyPart
          />
        ) : (
          <Loader />
        )}
      </Box>
    </Stack>
  );
};
export default SearchExercises;
