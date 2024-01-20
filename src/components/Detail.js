import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", sx: "20px" } }}>
        <Typography
          sx={{ fontSize: { xs: "2rem" }, textAlign: { xs: "center" } }}
          variant="h3"
        >
          <p style={{ textTransform: "capitalize" }}>{name}</p>
        </Typography>
        <Typography sx={{ textAlign: { xs: "center" } }} variant="h6">
          Exercise keep you strong.{" "}
          <p style={{ display: "inline", textTransform: "capitalize" }}>
            <b>{name}</b>
          </p>{" "}
          is one of the best exercise to target your {target}. It will help you
          improve your mood and gain energy
        </Typography>

        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: { xs: "70px", lg: "100px" },
                height: { xs: "70px", lg: "100px" },
                mt: { xs: "10px" },
              }}
            >
              <img src={item.icon} alt={item.name} className="detail_icon" />
            </Button>
            <Typography textTransform="capitalize" variant="h6">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
export default Detail;
