import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import moment from "moment";

// Styling
import { Form, Text } from "native-base";
import { DateItem, SearchMsg, SerachButton } from "./styles";

// Components
import TripType from "./TripType";
import Location from "./Location";
import Date from "./Date";
import Passengers from "./Passengers";
import FlightSeat from "./FlightSeat";

// Actions
import { searchFlight } from "../../store/actions/flightActions";

const Search = ({ navigation }) => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState({
    depDate: new Date(),
    returnDate: new Date(),
    depAirport: "",
    arrAirport: "",
  });

  const [flight, setFlight] = useState({
    depAirport: "",
    arrAirport: "",
    depDate: moment(display.depDate).format("YYYY-MM-DD"),
    returnDate: "",
    passengers: 1,
    seat: "economy",
    type: "roundtrip",
  });

  const handleSearch = () => {
    dispatch(searchFlight(flight));
    navigation.navigate("FlightList");
  };

  return (
    <View>
      <Form>
        <Location
          navigation={navigation}
          flight={flight}
          setFlight={setFlight}
          display={display}
          setDisplay={setDisplay}
          type="dep"
        />

        <Location
          navigation={navigation}
          flight={flight}
          setFlight={setFlight}
          display={display}
          setDisplay={setDisplay}
          type="arr"
        />

        <TripType flight={flight} setFlight={setFlight} />

        <DateItem>
          <Date
            flight={flight}
            setFlight={setFlight}
            display={display}
            setDisplay={setDisplay}
            type="dep"
          />
          {flight.type === "roundtrip" && (
            <Date
              flight={flight}
              setFlight={setFlight}
              display={display}
              setDisplay={setDisplay}
              type="return"
            />
          )}
        </DateItem>

        <Passengers flight={flight} setFlight={setFlight} />

        <FlightSeat flight={flight} setFlight={setFlight} />
      </Form>

      <SerachButton
        block
        onPress={handleSearch}
        disabled={
          flight.depAirport === flight.arrAirport ||
          !flight.depAirport ||
          !flight.arrAirport
        }
      >
        <Text>Search</Text>
      </SerachButton>

      {flight.arrAirport === flight.depAirport && (
        <SearchMsg>Airports must be diffrent...</SearchMsg>
      )}
    </View>
  );
};

export default Search;
