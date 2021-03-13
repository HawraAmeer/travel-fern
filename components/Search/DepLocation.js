import React from "react";

import { View, Label, Text, Icon } from "native-base";
//styles imports
import { LocationItemStyled } from "./styles";
const DepLocation = ({
  navigation,
  flight,
  setFlight,
  display,
  setDisplay,
}) => {
  return (
    <LocationItemStyled
      onPress={() => {
        request = "depAirport";
        navigation.navigate("Locations", {
          request,
          setFlight,
          flight,
          display,
          setDisplay,
        });
      }}
    >
      <Icon type="MaterialCommunityIcons" name="airplane-takeoff" />
      <Label>From </Label>
      <Text>{display.depAirport} </Text>
    </LocationItemStyled>
  );
};

export default DepLocation;
