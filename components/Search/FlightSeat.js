import React from "react";
import { View, Label, Picker, Icon } from "native-base";

//Styles
import { SearchItemStyled } from "./styles";

const FlightSeat = ({ flight, setFlight }) => {
  return (
    <SearchItemStyled>
      <Label>Class</Label>
      <Picker
        iosIcon={
          <Icon type="AntDesign" name="down" style={{ marginLeft: 193 }} />
        }
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
