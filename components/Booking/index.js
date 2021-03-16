import React from "react";
import { useSelector } from "react-redux";
import { View, Text, H2, H3, Item, List, ListItem, Button } from "native-base";
import FlightItem from "../FlightItem";
import ConfirmBtn from "../buttons/ConfirmBtn";

const Booking = ({ navigation }) => {
  const flightsReducer = useSelector((state) => state.flightReducer);
  const searchedFlight = flightsReducer.searchedFlight;
  const departureFlight = flightsReducer.departureFlight;
  const returnFlight = flightsReducer.returnFlight;
  const passengers = useSelector((state) => state.passengerReducer.passengers);
  const passengersList = passengers.map((passenger) => {
    return (
      <ListItem>
        <Text> - {passenger.firstName} </Text>
        <Text>{passenger.lastName}, </Text>
        <Text> {passenger.ageGroup} </Text>
      </ListItem>
    );
  });

  return (
    <View>
      <H2>Departure</H2>
      <FlightItem flight={departureFlight} key={departureFlight.id} />
      {returnFlight && (
        <View>
          <H2>Arrival</H2>
          <FlightItem flight={returnFlight} key={returnFlight.id} />
        </View>
      )}
      <H3>Passengers:</H3>
      <List>{passengersList}</List>
      <ConfirmBtn navigation={navigation} />
    </View>
  );
};

export default Booking;