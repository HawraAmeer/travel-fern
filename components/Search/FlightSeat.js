import React from "react";

// Styling
import { Label, Picker } from "native-base";
import { ArrowDown, SearchItem, SearchLabel } from "./styles";

const FlightSeat = ({ flight, setFlight }) => {
  return (
    <SearchItem>
      <SearchLabel>Seat Type</SearchLabel>
      <Picker
        // remove inline styling
        iosIcon={<ArrowDown type="AntDesign" name="down" />}
        selectedValue={flight.seat}
        onValueChange={(seat) => {
          setFlight({ ...flight, seat });
        }}
      >
        <Picker.Item label="Economy" value="economy" />
        <Picker.Item label="Business" value="business" />
      </Picker>
    </SearchItem>
  );
};

export default FlightSeat;
