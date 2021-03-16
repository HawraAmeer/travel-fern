import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Button } from "native-base";
import { Alert } from "react-native";
const ConfirmBtn = ({ navigation }) => {
  const user = useSelector((state) => state.authReducer.user);
  const flightsReducer = useSelector((state) => state.flightReducer);

  const handlePress = () => {
    if (user) {
      console.log("signin");
    } else {
      Alert.alert(
        "Confirm Booking?",
        "Sign in before complete the booking ?",
        [
          {
            text: "book as guest",
            onPress: () => console.log("Cancel Pressed"),
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
