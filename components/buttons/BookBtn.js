import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { searchFlight, setFlight } from "../../store/actions/flightActions";

// Styling Components
import { CardItem, Text, Left, Right } from "native-base";
import { BookButton } from "../FlightItem/styles";

const BookBtn = ({ flight }) => {
  const dispatch = useDispatch();
  const flightsReducer = useSelector((state) => state.flightReducer);
  const searchedFlight = flightsReducer.searchedFlight;

  const navigation = useNavigation();

  const bookFlight = () => {
    dispatch(setFlight(flight));
    if (searchedFlight.type === "oneway") {
      navigation.navigate("Passenger");
    } else {
      const returnFlight = {
        depAirport: flight.arrival.id,
        arrAirport: flight.departure.id,
        depDate: searchedFlight.returnDate,
        arrTime:
          searchedFlight.depDate === searchedFlight.returnDate
            ? (returnFlight.arrTime = flight.arrTime)
            : null,
        passengers: searchedFlight.passengers,
        seat: searchedFlight.seat,
        type: "oneway",
      };
      dispatch(searchFlight(returnFlight));
      navigation.navigate("FlightList");
    }
  };
  return (
    <CardItem>
      <Left></Left>
      <Right>
        <BookButton bordered rounded info onPress={bookFlight}>
          <Text>Book</Text>
        </BookButton>
      </Right>
    </CardItem>
  );
};

export default BookBtn;
