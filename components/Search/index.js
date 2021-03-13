import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { Button, Form, Text } from "native-base";

// Styles
import { DateItemStyled, SearchMsgStyled, SerachButtonStyled } from "./styles";

// Components
import TripType from "./TripType";
import DepLocation from "./DepLocation";
import ArrLocation from "./ArrLocation";
import DepDate from "./DepDate";
import ArrDate from "./ArrDate";
import Passengers from "./Passengers";

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
        <TripType flight={flight} setFlight={setFlight} />

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
          {flight.tripType === "round" && (
            <ArrDate
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
        onPress={searchFlight}
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

      <Button
        block
        style={{ margin: 15 }}
        onPress={() => navigation.navigate("FlightList")}
      >
        <Text>FlightList</Text>
      </Button>
    </View>
  );
};

export default Search;
