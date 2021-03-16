import React from "react";
import { View, Text, Item, Icon, Label } from "native-base";

//Styles
import { SearchItemStyled, PassengerIconStyled } from "./styles";

const Passengers = ({ flight, setFlight }) => {
  return (
    <SearchItemStyled>
      <Icon type="Ionicons" name="people" />
      <Label>Passengers: </Label>
      {flight.passengers > 1 && (
        <PassengerIconStyled
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
      <PassengerIconStyled
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
    </SearchItemStyled>
  );
};

export default Passengers;
