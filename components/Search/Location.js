import React from "react";

// Styling
import { Label, Text, Icon } from "native-base";
import { LocationItem } from "./styles";

const Location = ({
  navigation,
  flight,
  setFlight,
  display,
  setDisplay,
  type,
}) => {
  return (
    <LocationItem
      onPress={() => {
        navigation.navigate("Locations", {
          request: type === "dep" ? "depAirport" : "arrAirport",
          setFlight,
          flight,
          display,
          setDisplay,
        });
      }}
    >
      <Icon type="MaterialCommunityIcons" name="airplane-takeoff" />
      <Label>From </Label>
      <Text>{type === "dep" ? display.depAirport : display.arrAirport} </Text>
    </LocationItem>
  );
};

export default Location;
