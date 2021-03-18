import React from "react";

// Styling
import { Label, Picker, View } from "native-base";
import { SearchItem, SearchLabel, TypeIcon } from "./styles";

const TripType = ({ flight, setFlight }) => {
  return (
    <SearchItem>
      <SearchLabel>Trip</SearchLabel>
      <View>
        <Picker
          itemStyle={{ color: "red", fontSize: 20 }}
          iosIcon={<TypeIcon type="AntDesign" name="down" />}
          selectedValue={flight.type}
          onValueChange={(type) => {
            setFlight({ ...flight, type });
          }}
        >
          <Picker.Item label="Roundtrip" value="roundtrip" />
          <Picker.Item label="One-way" value="oneway" />
        </Picker>
      </View>
    </SearchItem>
  );
};

export default TripType;
