import React from "react";

// Styling
import { Picker } from "native-base";
import { AirlineItem, AirlineLabel, DownIcon } from "./style";
import { SearchLabel } from "../Search/styles";

const Airline = ({ filter, setFilter, airlinesList }) => {
  return (
    <AirlineItem>
      <AirlineLabel>Airline</AirlineLabel>
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
