import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { Form, Text } from "native-base";
import moment from "moment";
import { searchFlight } from "../../store/actions/flightActions";

// Components
import TripType from "./TripType";
import DepLocation from "./DepLocation";
import ArrLocation from "./ArrLocation";
import DepDate from "./DepDate";
import ReturnDate from "./ReturnDate";
import Passengers from "./Passengers";
import FlightSeat from "./FlightSeat";

// Styling Components
import { DateItem, SearchMsg, SerachButton } from "./styles";

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
    seat: "economy", //Economy, Business
    type: "roundtrip", //Roundtrip, Oneway
  });

  const search = () => {
    dispatch(searchFlight(flight));
    navigation.navigate("FlightList");
  };

  return (
    <View>
      <Form>
        {/* //----------TRIP TYPE----------// */}
        <TripType flight={flight} setFlight={setFlight} />

        {/* //----------SEAT TYPE----------// */}
        <FlightSeat flight={flight} setFlight={setFlight} />

        {/* //----------DEPARTURE LOCATION----------// */}
        {/* bothe locations can use one component */}
        <DepLocation
          navigation={navigation}
          flight={flight}
          setFlight={setFlight}
          display={display}
          setDisplay={setDisplay}
        />
        {/* //----------ARRIVAL LOCATION----------// */}

        <ArrLocation
          navigation={navigation}
          flight={flight}
          setFlight={setFlight}
          display={display}
          setDisplay={setDisplay}
        />
        {/* //----------DEPARTURE & ARRIVAL DATES----------// */}
        {/* bothe dates can use one component */}
        <DateItem>
          <DepDate
            flight={flight}
            setFlight={setFlight}
            display={display}
            setDisplay={setDisplay}
          />
          {flight.type === "roundtrip" && (
            <ReturnDate
              flight={flight}
              setFlight={setFlight}
              display={display}
              setDisplay={setDisplay}
            />
          )}
        </DateItem>

        {/* //----------NUMBER OF PASSENGERS----------// */}
        <Passengers flight={flight} setFlight={setFlight} />
      </Form>

      <SerachButton
        block
        onPress={search}
        disabled={
          flight.depAirport === flight.arrAirport ||
          !flight.depAirport ||
          !flight.arrAirport
        }
      >
        <Text>Search</Text>
      </SerachButton>

      {flight.arrAirport === flight.depAirport && (
        <SearchMsg>
          Departure and Arrival locations must be diffrent...
        </SearchMsg>
      )}
    </View>
  );
};

export default Search;
