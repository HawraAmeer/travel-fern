import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPassengersList } from "../../store/actions/passengerActions";

// Styling
import { List, Text, Content } from "native-base";
import { NextButton } from "./styles";

// Components
import PassengerItem from "./PassengerItem";

const PassengerForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const flightsReducer = useSelector((state) => state.flightReducer);
  const [passengers, setPassengers] = useState([]);

  const searchedFlight = flightsReducer.searchedFlight;

  const passengersForm = new Array(searchedFlight.passengers)
    .fill()
    .map((_, index) => (
      <PassengerItem
        passengers={passengers}
        setPassengers={setPassengers}
        key={index}
        passengerNum={index + 1}
      />
    ));

  const setBooking = () => {
    dispatch(setPassengersList(passengers));
    navigation.navigate("Booking");
  };

  return (
    <Content>
      <List>{passengersForm}</List>
      <NextButton
        block
        onPress={setBooking}
        disabled={passengers.length !== searchedFlight.passengers}
      >
        <Text>Next</Text>
      </NextButton>
    </Content>
  );
};

export default PassengerForm;
