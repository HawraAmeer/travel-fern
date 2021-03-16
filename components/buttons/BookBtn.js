import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CardItem, Text, Left, Right } from "native-base";
import { BookButtonStyled } from "../FlightItem/styles";
import { useNavigation } from "@react-navigation/native";
import { searchFlight, setFlight } from "../../store/actions/flightActions";
const BookBtn = ({ flight }) => {
  const dispatch = useDispatch();
  const flightsReducer = useSelector((state) => state.flightReducer);
  const searchedFlight = flightsReducer.searchedFlight;

  const navigation = useNavigation();

  const bookFlight = () => {
    //SET Flight , departure or arrival will be determind in flight reducer
    dispatch(setFlight(flight));
    if (searchedFlight.type === "oneway") {
      navigation.navigate("Passenger"); //departure flight will sent to passenger form
    } else {
      const returnFlight = {
        depAirport: flight.arrival.id,
        arrAirport: flight.departure.id,
        depDate: searchedFlight.returnDate,
        passengers: searchedFlight.passengers,
        seat: searchedFlight.seat,
        type: "oneway",
      };
      //if the user will return on the same day
      if (searchedFlight.depDate === searchedFlight.returnDate)
        returnFlight.arrTime = flight.arrTime;
      dispatch(searchFlight(returnFlight));
      navigation.navigate("FlightList");
    }
  };
  return (
    <CardItem>
      <Left></Left>
      <Right>
        <BookButtonStyled bordered rounded info onPress={() => bookFlight()}>
          <Text>Book</Text>
        </BookButtonStyled>
      </Right>
    </CardItem>
  );
};

export default BookBtn;
