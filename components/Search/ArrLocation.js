import React from "react";
import { View, Label, Text, Icon } from "native-base";

// Styles
import { LocationItemStyled } from "./styles";

const ArrLocation = ({
  navigation,
  flight,
  setFlight,
  display,
  setDisplay,
}) => {
  return (
    <LocationItemStyled
      onPress={() => {
        request = "arrAirport";
        navigation.navigate("Locations", {
          request,
          setFlight,
          flight,
          display,
          setDisplay,
        });
      }}
    >
      <Icon type="MaterialCommunityIcons" name="airplane-landing" />
      <Label>To</Label>
      <Text>{display.arrAirport} </Text>
    </LocationItemStyled>
  );
};

export default ArrLocation;
