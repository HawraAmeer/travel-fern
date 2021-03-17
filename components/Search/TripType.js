import React from "react";
import { Label, Picker } from "native-base";

// Styling Components
import { SearchItem, TypeIcon } from "./styles";

const TripType = ({ flight, setFlight }) => {
  return (
    <SearchItem>
      <Label>Trip</Label>
      <Picker
        iosIcon={<TypeIcon type="AntDesign" name="down" />}
        selectedValue={flight.type}
        onValueChange={(type) => {
          setFlight({ ...flight, type });
        }}
      >
        <Picker.Item label="Roundtrip" value="roundtrip" />
        <Picker.Item label="One-way" value="oneway" />
      </Picker>
    </SearchItem>
  );
};

export default TripType;
