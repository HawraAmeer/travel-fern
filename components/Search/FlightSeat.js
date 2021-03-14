import React from "react";
import { View, Label, Picker } from "native-base";

//Styles
import { SearchItemStyled } from "./styles";

const FlightSeat = ({ flight, setFlight }) => {
  return (
    <SearchItemStyled>
      <Label>Seat Type:</Label>
      <Picker
        selectedValue={flight.seat}
        onValueChange={(seat) => {
          setFlight({ ...flight, seat });
        }}
      >
        <Picker.Item label="Economy" value="economy" />
        <Picker.Item label="Business" value="business" />
      </Picker>
    </SearchItemStyled>
  );
};

export default FlightSeat;
