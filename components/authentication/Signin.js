import React, { useState } from "react";

// Styling Components
import { Button } from "native-base";
import { View, Text, TextInput } from "react-native";

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
      <Button>
        <Text>next</Text>
      </Button>
      <Text>Click to Create New Account!</Text>
    </View>
  );
};

export default Signin;
