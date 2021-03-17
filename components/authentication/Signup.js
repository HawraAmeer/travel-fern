import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";

// Styling Components
import { View, Text, Form, Item, Input, Label } from "native-base";
import { AuthButton } from "./styles";

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
      <AuthButton onPress={usersignup}>
        <Text>Sign up</Text>
      </AuthButton>
    </View>
  );
};

export default Signup;
