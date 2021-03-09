import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, Form, Item, Input, Label, Button } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { signup } from "../../store/actions/authActions";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const usersignup = () => {
    dispatch(signup(user, navigation));
  };
  return (
    <View>
      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input
            autoCapitalize={"none"}
            onChangeText={(username) => setUser({ ...user, username })}
            value={user.username}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
            value={user.password}
          />
        </Item>
        <Item floatingLabel last>
          <Label>E-mail</Label>
          <Input
            keyboardType="email-address"
            onChangeText={(email) => setUser({ ...user, email })}
            value={user.email}
            autoCapitalize={"none"}
          />
        </Item>
      </Form>
      <Button block style={{ margin: 15 }} onPress={usersignup}>
        <Text>Sign up</Text>
      </Button>
    </View>
  );
};

export default Signup;
