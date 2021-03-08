import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";
// Styling Components
import { Button } from "native-base";
import { View, Text, TextInput } from "react-native";

const Signin = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });

  const usersignin = () => {
    dispatch(signin(user));
  };
  return (
    <View>
      <Text>Sign in</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor="grey"
        onChangeText={(username) => setUser({ ...user, username })}
        autoCapitalize={"none"}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Button onPress={usersignin}>
        <Text>next</Text>
      </Button>
      <Text>Click to Create New Account!</Text>
    </View>
  );
};

export default Signin;
