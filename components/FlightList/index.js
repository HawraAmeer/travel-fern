import React from "react";
import { View, Icon } from "native-base";

// Styles
import { DatesTextStyled, TitleTextSyled, TitleViewStyled } from "./styles";

// Components
import FlightItem from "../FlightItem";

const FlightList = () => {
  return (
    <View>
      <TitleViewStyled>
        <TitleTextSyled>Manama</TitleTextSyled>
        <Icon type="AntDesign" name="arrowright" />
        <TitleTextSyled> Dubai</TitleTextSyled>
      </TitleViewStyled>
      <DatesTextStyled>Sun, 21 Mar - Sun, 28 Mar </DatesTextStyled>
      <FlightItem />
    </View>
  );
};

export default FlightList;
