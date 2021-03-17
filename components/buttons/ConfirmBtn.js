import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Styling
import { View, Text } from "native-base";
import { Alert } from "react-native";
import { NextButton } from "./styles";

// Actions
import { bookFlight } from "../../store/actions/flightActions";

const ConfirmBtn = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  const flightsReducer = useSelector((state) => state.flightReducer);
  const searchedFlight = flightsReducer.searchedFlight;
  const departureFlight = flightsReducer.departureFlight;
  const returnFlight = flightsReducer.returnFlight;

  const passengers = useSelector((state) => state.passengerReducer.passengers);

  const booking = {
    user: user ? { userId: user.id, email: user.email } : "guest",
    passengers: passengers,
    goFlight: {
      flightId: departureFlight.id,
      seat: searchedFlight.seat,
      price:
        searchedFlight.seat === "economy"
          ? departureFlight.ePrice
          : departureFlight.bPrice,
    },
    returnFlight: returnFlight
      ? {
          flightId: returnFlight.id,
          seat: searchedFlight.seat,
          price:
            searchedFlight.seat === "economy"
              ? departureFlight.ePrice
              : departureFlight.bPrice,
        }
      : null,
  };

  const handlePress = () => {
    if (user) {
      dispatch(bookFlight(booking));
      navigation.navigate("Home");
    } else {
      Alert.alert(
        "Confirm Booking?",
        "Continue withou signing in ?",
        [
          {
            text: "book as guest",
            onPress: () => {
              dispatch(bookFlight(booking));
              navigation.navigate("Home");
            },
          },
          {
            text: "Sign in",
            onPress: () => navigation.navigate("Signin"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View>
      <NextButton block onPress={handlePress}>
        <Text>{user ? "Confirm" : "Next"}</Text>
      </NextButton>
    </View>
  );
};

export default ConfirmBtn;
