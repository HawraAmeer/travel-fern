import React from "react";

// Styling
import { Label, Picker } from "native-base";
import { AirlineItem, DownIcon } from "./style";

const Airline = ({ filter, setFilter, airlinesList }) => {
  return (
    <AirlineItem>
      <Label>Airline</Label>
      <Picker
        iosIcon={<DownIcon type="AntDesign" name="down" />}
        selectedValue={filter.airline}
        onValueChange={(airline) => {
          setFilter({ ...filter, airline });
        }}
      >
        {airlinesList}
      </Picker>
    </AirlineItem>
  );
};

export default Airline;
