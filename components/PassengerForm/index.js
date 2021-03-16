import React, { useState } from "react";
import { List, Text, Content, Button } from "native-base";
import PassengerItem from "./PassengerItem";
import { useDispatch, useSelector } from "react-redux";
import { setPassengersList } from "../../store/actions/passengerActions";
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
      {/* remove inline styling */}
      <Button
        block
        style={{ margin: 15 }}
        onPress={() => setBooking()}
        disabled={passengers.length !== searchedFlight.passengers}
      >
        <Text>Next</Text>
      </Button>
    </Content>
  );
};

export default PassengerForm;
