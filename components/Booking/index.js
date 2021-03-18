import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
// Styling Components
import { View, Text, H2, H3, List, ListItem, Right } from "native-base";

// Components
import FlightItem from "../FlightItem";
import ConfirmBtn from "../buttons/ConfirmBtn";
import { BookingTitle, PassengerInfo, PassengersText } from "./styles";

const Booking = ({ navigation }) => {
  const flightsReducer = useSelector((state) => state.flightReducer);
  const departureFlight = flightsReducer.departureFlight;
  const returnFlight = flightsReducer.returnFlight;
  const searchedFlight = flightsReducer.searchedFlight;

  const passengers = useSelector((state) => state.passengerReducer.passengers);

  const passengersList = passengers.map((passenger) => {
    return (
      <ListItem>
        <PassengerInfo> - {passenger.firstName} </PassengerInfo>
        <PassengerInfo>{passenger.lastName}, </PassengerInfo>
        <PassengerInfo> {passenger.ageGroup} </PassengerInfo>
      </ListItem>
    );
  });

  return (
    <View>
      <BookingTitle>
        Departure Flight
        <Text>
          {"\n"}
          {moment(departureFlight.depDate.depDate).format("LL")}
        </Text>
      </BookingTitle>
      <FlightItem
        flight={departureFlight}
        key={departureFlight.id}
        searchedFlight={searchedFlight}
      />
      {returnFlight && (
        <View>
          <BookingTitle>
            Return Flight
            <Text>
              {"\n"} {moment(returnFlight.depDate).format("LL")}
            </Text>
          </BookingTitle>
          <FlightItem
            flight={returnFlight}
            key={returnFlight.id}
            searchedFlight={searchedFlight}
          />
        </View>
      )}
      <PassengersText>Passengers: ({passengersList.length})</PassengersText>
      <List>{passengersList}</List>
      <ConfirmBtn navigation={navigation} />
    </View>
  );
};

export default Booking;
