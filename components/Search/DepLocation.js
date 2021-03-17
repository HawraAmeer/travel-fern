import React from "react";

// Styling Components
import { View, Label, Text, Icon } from "native-base";
import { LocationItem } from "./styles";

const DepLocation = ({
  navigation,
  flight,
  setFlight,
  display,
  setDisplay,
}) => {
  return (
    <LocationItem
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
    </LocationItem>
  );
};

export default DepLocation;
