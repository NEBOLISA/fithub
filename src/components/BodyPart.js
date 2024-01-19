import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import neck from "../assets/icons/neck.png";
import waist from "../assets/icons/waist.png";
import upperLeg from "../assets/icons/upper-leg.png";
import upperArm from "../assets/icons/upper-arms.png";
import shoulders from "../assets/icons/shoulders.png";
import lowerLeg from "../assets/icons/lower-leg.png";
import lowerArm from "../assets/icons/lower-arms.png";
import chest from "../assets/icons/chest.png";
import cardio from "../assets/icons/cardio.png";
import back from "../assets/icons/back.png";
const BodyPart = ({ item, index, setBodyPart, bodyPart }) => {
  const bodyPartIcon = [
    back,
    cardio,
    chest,
    lowerArm,
    lowerLeg,
    neck,
    shoulders,
    upperArm,
    upperLeg,
    waist,
  ];
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "rgb(250,250,250)",
        borderRadius: "20px",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        //borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behaviour: "smooth" });
      }}
    >
      {index !== 0 && (
        <img
          src={bodyPartIcon[index - 1]}
          alt="dumbell"
          style={{ width: "40px", height: "40px" }}
        />
      )}
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};
export default BodyPart;
