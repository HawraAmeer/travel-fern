import React from "react";
import { View, Label, Picker } from "native-base";

//Styles
import { SearchItemStyled } from "./styles";

const TripType = ({ flight, setFlight }) => {
  return (
    <SearchItemStyled>
      <Label>Trip Type:</Label>
      <Picker
        selectedValue={flight.type}
        onValueChange={(type) => {
          setFlight({ ...flight, type });
        }}
      >
        <Picker.Item label="Roundtrip" value="roundtrip" />
        <Picker.Item label="One-way" value="oneweay" />
      </Picker>
    </SearchItemStyled>
  );
};

export default TripType;
