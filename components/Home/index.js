import { Button, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signout } from "../../store/actions/authActions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const usersignout = () => {
    dispatch(signout(navigation));
  };
  return (
    <View>
      <Button
        block
        style={{ margin: 15 }}
        onPress={() => navigation.navigate("Sign-in")}
      >
        <Text>Sign in</Text>
      </Button>
      <Button
        block
        style={{ margin: 15 }}
        onPress={() => navigation.navigate("Sign-up")}
      >
        <Text>Sign up</Text>
      </Button>
      <Button
        block
        style={{ margin: 15 }}
        onPress={() => navigation.navigate("my-account")}
      >
        <Text>My Account</Text>
      </Button>
      {user ? (
        <Text
          style={{ textAlign: "center", fontSize: 18 }}
          onPress={usersignout}
        >
          {user.username}, Logout
        </Text>
      ) : (
        true
      )}
    </View>
  );
};

export default Home;
