import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { Button, Form, Text } from "native-base";
import moment from "moment";
// Styles
import { DateItemStyled, SearchMsgStyled, SerachButtonStyled } from "./styles";

// Components
import TripType from "./TripType";
import DepLocation from "./DepLocation";
import ArrLocation from "./ArrLocation";
import DepDate from "./DepDate";
import ReturnDate from "./ReturnDate";
import Passengers from "./Passengers";
import FlightSeat from "./FlightSeat";

//Actions
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
        <DateItemStyled>
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
        </DateItemStyled>

        {/* //----------NUMBER OF PASSENGERS----------// */}
        <Passengers flight={flight} setFlight={setFlight} />
      </Form>

      <SerachButtonStyled
        block
        onPress={search}
        disabled={
          flight.depAirport === flight.arrAirport ||
          !flight.depAirport ||
          !flight.arrAirport
        }
      >
        <Text>Search</Text>
      </SerachButtonStyled>

      {flight.arrAirport === flight.depAirport && (
        <SearchMsgStyled>
          Departure and Arrival locations must be diffrent...
        </SearchMsgStyled>
      )}
    </View>
  );
};

export default Search;
