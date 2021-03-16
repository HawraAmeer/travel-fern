import { Button, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// Components
import { signout } from "../../store/actions/authActions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  return (
    <View>
      <Button
        block
        style={{ margin: 15 }}
        onPress={() => navigation.navigate("SearchFlight")}
      >
        <Text>Search Flight</Text>
      </Button>
      <Button
        block
        style={{ margin: 15 }}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text>Sign in</Text>
      </Button>
      <Button
        block
        style={{ margin: 15 }}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text>Sign up</Text>
      </Button>
      <Button
        block
        style={{ margin: 15 }}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text>My Account</Text>
      </Button>
      {user && (
        <Text
          style={{ textAlign: "center", fontSize: 18 }}
          onPress={() => dispatch(signout(navigation))}
        >
          {user.username}, Logout
        </Text>
      )}
    </View>
  );
};

export default Home;
