import React from "react";

import { View, Label, Picker } from "native-base";
import { SearchItemStyled } from "./styles";
const TripType = ({ flight, setFlight }) => {
  return (
    <SearchItemStyled>
      <Label>Trip Type:</Label>
      <Picker
        selectedValue={flight.tripType}
        onValueChange={(tripType) => {
          setFlight({ ...flight, tripType });
        }}
      >
        <Picker.Item label="Roundtrip" value="round" />
        <Picker.Item label="One-way" value="oneweay" />
      </Picker>
    </SearchItemStyled>
  );
};

export default TripType;
