import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Styling
import { View, Text, Form, Item, Input, Label } from "native-base";
import { AuthButton } from "./styles";

// Actions
import { signup } from "../../store/actions/authActions";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const usersignup = () => {
    dispatch(signup(user, navigation));
  };

  return (
    <View>
      <Form>
        <Item floatingLabel>
          <Label>First Name</Label>
          <Input
            onChangeText={(firstName) => setUser({ ...user, firstName })}
            value={user.firstName}
          />
        </Item>
        <Item floatingLabel>
          <Label>Last Name</Label>
          <Input
            onChangeText={(lastName) => setUser({ ...user, lastName })}
            value={user.lastName}
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
      </Form>
      <AuthButton onPress={usersignup}>
        <Text>Sign up</Text>
      </AuthButton>
    </View>
  );
};

export default Signup;

// use (useForm) for validation
