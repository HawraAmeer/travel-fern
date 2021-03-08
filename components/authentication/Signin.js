import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Signin = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  return (
    <View>
      <Text>Sign in</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor="grey"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Button>Submit</Button>
      <Text>Click to Create New Account!</Text>
    </View>
  );
};

export default Signin;
