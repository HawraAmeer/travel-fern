import React from "react";

// Styling
import { Text, Icon, Label } from "native-base";
import {
  SearchItem,
  PassengerIcon,
  AirIcon,
  PassengerNumber,
  SearchLabel,
} from "./styles";

const Passengers = ({ flight, setFlight }) => {
  return (
    <SearchItem>
      <AirIcon type="Ionicons" name="people" />
      <SearchLabel>Passengers: </SearchLabel>
      {flight.passengers > 1 && (
        <PassengerIcon
          type="AntDesign"
          name="minuscircleo"
          onPress={() =>
            setFlight({
              ...flight,
              passengers: (flight.passengers -= 1),
            })
          }
        />
      )}

      <PassengerNumber> {flight.passengers} </PassengerNumber>
      <PassengerIcon
        type="AntDesign"
        name="pluscircleo"
        onPress={() =>
          setFlight({
            ...flight,
            passengers: (flight.passengers += 1),
          })
        }
      />
    </SearchItem>
  );
};

export default Passengers;
