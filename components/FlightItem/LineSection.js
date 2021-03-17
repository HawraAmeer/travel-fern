import React from "react";

// Styling Components
import { AirplaneIcon, LineCardItem, LinesText } from "./styles";

const LineSection = () => {
  return (
    <LineCardItem cardBody>
      <LinesText>◉ ----------------------</LinesText>
      <AirplaneIcon type="Ionicons" name="airplane" />
      <LinesText>-------------------◉</LinesText>
    </LineCardItem>
  );
};

export default LineSection;
