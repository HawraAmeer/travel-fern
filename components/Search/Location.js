import React from "react";

// Styling
import { Label, Text, Icon } from "native-base";
import { AirIcon, LocationItem, LocationText, SearchLabel } from "./styles";

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
      <AirIcon
        type="MaterialCommunityIcons"
        name={type === "dep" ? "airplane-takeoff" : "airplane-landing"}
      />
      <SearchLabel>{type === "dep" ? "From" : "To"}</SearchLabel>
      <LocationText>
        {type === "dep" ? display.depAirport : display.arrAirport}{" "}
      </LocationText>
    </LocationItem>
  );
};

export default Location;
