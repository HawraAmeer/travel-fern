import React from "react";

// Styling Components
import { View, Text, Item, Icon, Label } from "native-base";
import { SearchItem, PassengerIcon } from "./styles";

const Passengers = ({ flight, setFlight }) => {
  return (
    <SearchItem>
      <Icon type="Ionicons" name="people" />
      <Label>Passengers: </Label>
      {flight.passengers > 1 && (
        <PassengerIcon
          type="AntDesign"
          name="minuscircleo"
          // remove inline styling
          style={{ marginLeft: 10 }}
          onPress={() =>
            setFlight({
              ...flight,
              passengers: (flight.passengers -= 1),
            })
          }
        />
      )}

      <Text> {flight.passengers} </Text>
      <PassengerIcon
        type="AntDesign"
        name="pluscircleo"
        // remove inline styling
        style={{ marginLeft: 10 }}
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
