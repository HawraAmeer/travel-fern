import React from "react";

// Styling Components
import { View, Label, Text, Icon } from "native-base";
import { LocationItem } from "./styles";

const ArrLocation = ({
  navigation,
  flight,
  setFlight,
  display,
  setDisplay,
}) => {
  return (
    <LocationItem
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
    </LocationItem>
  );
};

export default ArrLocation;
