import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Button } from "native-base";
import { Alert } from "react-native";
import { bookFlight } from "../../store/actions/flightActions";
const ConfirmBtn = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const flightsReducer = useSelector((state) => state.flightReducer);
  const passengers = useSelector((state) => state.passengerReducer.passengers);

  const searchedFlight = flightsReducer.searchedFlight;
  const departureFlight = flightsReducer.departureFlight;
  const returnFlight = flightsReducer.returnFlight;

  const booking = {
    user: user ? { userId: user.id, email: user.email } : "guest",
    passengers: passengers,
    goFlight: { flightId: departureFlight.id, seat: searchedFlight.seat },
    returnFlight: returnFlight
      ? { flightId: returnFlight.id, seat: searchedFlight.seat }
      : null,
  };
  const handlePress = () => {
    if (user) {
      dispatch(bookFlight(booking));
      navigation.navigate("Home");
    } else {
      Alert.alert(
        "Confirm Booking?",
        "Sign in before complete the booking ?",
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
      <Button block style={{ margin: 15 }} onPress={handlePress}>
        <Text>{user ? "Confirm" : "Next"}</Text>
      </Button>
    </View>
  );
};

export default ConfirmBtn;
