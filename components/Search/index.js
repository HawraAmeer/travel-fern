import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Item,
  Input,
  Label,
  Text,
  Icon,
  Picker,
  Button,
} from "native-base";

//compomnents imports
import DepDate from "./DepDate";
import ArrDate from "./ArrDate";

const Search = ({ navigation }) => {
  const dispatch = useDispatch();
  const [flight, setFlight] = useState({
    depAirport: "",
    arrAirport: "",
    depDate: "",
    arrDate: "",
    passengers: 1,
    tripType: "round", //Roundtrip, Oneway
  });

  const [display, setDisplay] = useState({
    depDate: new Date(),
    arrDate: new Date(),
    depAirport: "",
    arrAirport: "",
  });

  const searchFlight = () => {
    console.log(flight);
    // dispatch(searchFlight(flight, navigation));
  };

  return (
    <View>
      <Form>
        {/* //----------TRIP TYPE----------// */}
        <Item>
          <Label>Trip Type:</Label>
          <Picker
            mode="dropdown"
            style={{ width: 120 }}
            selectedValue={flight.tripType}
            onValueChange={(tripType) => {
              setFlight({ ...flight, tripType });
            }}
          >
            <Picker.Item label="One-way" value="oneweay" />
            <Picker.Item label="Roundtrip" value="round" />
          </Picker>
        </Item>

        {/* //----------DEPARTURE LOCATION----------// */}
        <Item
          style={{ paddingTop: 10, paddingBottom: 10 }}
          onPress={() => {
            request = "depAirport";
            navigation.navigate("Locations", {
              request,
              setFlight,
              flight,
              display,
              setDisplay,
            });
          }}
        >
          <Icon type="MaterialCommunityIcons" name="airplane-takeoff" />
          <Label>From </Label>
          <Text>{display.depAirport} </Text>
        </Item>

        {/* //----------ARRIVAL LOCATION----------// */}
        <Item
          style={{ paddingTop: 10, paddingBottom: 10 }}
          onPress={() => {
            request = "arrAirport";
            navigation.navigate("Locations", {
              request,
              setFlight,
              flight,
              display,
              setDisplay,
            });
          }}
        >
          <Icon type="MaterialCommunityIcons" name="airplane-landing" />
          <Label>To</Label>
          <Text>{display.arrAirport} </Text>
        </Item>

        {/* //----------DEPARTURE & ARRIVAL DATES----------// */}
        <Item style={{ margin: 5 }}>
          <DepDate
            flight={flight}
            setFlight={setFlight}
            display={display}
            setDisplay={setDisplay}
          />

          <ArrDate
            flight={flight}
            setFlight={setFlight}
            display={display}
            setDisplay={setDisplay}
          />
        </Item>

        {/* //----------NUMBER OF PASSENGERS----------// */}
        <Item>
          <Icon type="Ionicons" name="people" />
          <Label>Passengers: </Label>
          {flight.passengers > 1 && (
            <Icon
              type="AntDesign"
              name="minuscircleo"
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
          <Icon
            type="AntDesign"
            name="pluscircleo"
            style={{ marginLeft: 10 }}
            onPress={() =>
              setFlight({
                ...flight,
                passengers: (flight.passengers += 1),
              })
            }
          />

          <Input />
        </Item>
      </Form>
      {flight.arrAirport === flight.depAirport && (
        <Text>Departure and Arrival locations are the same!!</Text>
      )}
      <Button
        block
        style={{ margin: 15 }}
        onPress={searchFlight}
        disabled={flight.depAirport === flight.arrAirport}
      >
        <Text>Search</Text>
      </Button>
    </View>
  );
};

export default Search;
