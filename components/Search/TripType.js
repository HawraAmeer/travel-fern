import React from "react";
import { View, Label, Picker, Icon } from "native-base";

//Styles
import { SearchItemStyled } from "./styles";

const TripType = ({ flight, setFlight }) => {
  return (
    <SearchItemStyled>
      <Label>Trip</Label>
      <Picker
        iosIcon={
          // remove inline styling
          <Icon type="AntDesign" name="down" style={{ marginLeft: 200 }} />
        }
        selectedValue={flight.type}
        onValueChange={(type) => {
          setFlight({ ...flight, type });
        }}
      >
        <Picker.Item label="Roundtrip" value="roundtrip" />
        <Picker.Item label="One-way" value="oneway" />
      </Picker>
    </SearchItemStyled>
  );
};

export default TripType;
