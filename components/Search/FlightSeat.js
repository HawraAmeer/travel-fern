import React from "react";

// Styling
import { Label, Picker } from "native-base";
import { ArrowDown, SearchItem } from "./styles";

const FlightSeat = ({ flight, setFlight }) => {
  return (
    <SearchItem>
      <Label>Seat Type</Label>
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
