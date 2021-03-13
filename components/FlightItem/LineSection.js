import React from "react";

//Styles
import {
  AirplaneIconStyled,
  LineCardItemStyled,
  LinesTextStyled,
} from "./styles";

const LineSection = () => {
  return (
    <LineCardItemStyled cardBody>
      <LinesTextStyled>◉ ----------------------</LinesTextStyled>
      <AirplaneIconStyled type="Ionicons" name="airplane" />
      <LinesTextStyled>-------------------◉</LinesTextStyled>
    </LineCardItemStyled>
  );
};

export default LineSection;
