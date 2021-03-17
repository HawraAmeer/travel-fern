import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styling
import { View, Text } from "native-base";
import { HomeButton, Logout } from "./styles";

// Actions
import { signout } from "../../store/actions/authActions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  return (
    <View>
      <HomeButton block onPress={() => navigation.navigate("SearchFlight")}>
        <Text>Search Flight</Text>
      </HomeButton>
      <HomeButton block onPress={() => navigation.navigate("Signin")}>
        <Text>Sign in</Text>
      </HomeButton>
      <HomeButton block onPress={() => navigation.navigate("Signup")}>
        <Text>Sign up</Text>
      </HomeButton>
      {user && (
        <View>
          <HomeButton block onPress={() => navigation.navigate("Profile")}>
            <Text>My Account</Text>
          </HomeButton>
          <Logout onPress={() => dispatch(signout(navigation))}>
            {user.username}, Logout
          </Logout>
        </View>
      )}
    </View>
  );
};

export default Home;

// background, welcome message, if user (username & logout btn/icon) else (sign in btn)
