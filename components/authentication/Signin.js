import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";

// Styling Components
import { View, Text, Form, Item, Input, Label, Button } from "native-base";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });

  const usersignin = () => {
    dispatch(signin(user, navigation));
  };
  return (
    <View>
      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input
            autoCapitalize={"none"}
            onChangeText={(username) => setUser({ ...user, username })}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
        </Item>
      </Form>
      {/* remove inline styling */}
      <Button block style={{ margin: 15 }} onPress={usersignin}>
        <Text>Sign in</Text>
      </Button>
      <Text>Create New Account!</Text>
    </View>
  );
};

export default Signin;
