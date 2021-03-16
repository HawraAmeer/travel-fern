import React, { useState } from "react";
import { List, Text, Content, Button } from "native-base";
import PassengerItem from "./PassengerItem";
import { useSelector } from "react-redux";
const PassengerForm = () => {
  const flightsReducer = useSelector((state) => state.flightReducer);
  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    ageGroup: "adult",
  });

  const searchedFlight = flightsReducer.searchedFlight;
  const departureFlight = flightsReducer.departureFlight;
  const returnFlight = flightsReducer.returnFlight;
  console.log("🚀 searchedFlight", searchedFlight);
  console.log("🚀 departureFlight", departureFlight);
  console.log("🚀returnFlight", returnFlight);
  return (
    <Content>
      <List>
        <PassengerItem passenger={passenger} setPassenger={setPassenger} />
      </List>
      <Button
        block
        style={{ margin: 15 }}
        onPress={() => console.log(passenger)}
      >
        <Text>Next</Text>
      </Button>
    </Content>
  );
};

export default PassengerForm;
