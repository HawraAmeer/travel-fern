import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Styling
import { View, Text, Form, Item, Input, Label } from "native-base";
import { AuthButton } from "./styles";

// Actions
import { signin } from "../../store/actions/authActions";

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
      <AuthButton onPress={usersignin}>
        <Text>Sign in</Text>
      </AuthButton>
      <Text onPress={() => navigation.navigate("Signup")}>
        Create New Account!
      </Text>
    </View>
  );
};

export default Signin;

// use (useForm) for validation
