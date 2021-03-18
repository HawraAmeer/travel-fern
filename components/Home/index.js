import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styling
// import { View, Text } from "native-base";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { HomeBtnText, HomeButton, HomeTitle, Logout } from "./styles";
const image = {
  uri:
    "https://images.unsplash.com/photo-1496686941088-eaa405ad5fbb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80",
};

// Components
import Search from "../Search";

// Actions
import { signout } from "../../store/actions/authActions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <HomeTitle>Book your {"\n"}flight</HomeTitle>
        <View style={styles.buttons}>
          <HomeButton block onPress={() => navigation.navigate("SearchFlight")}>
            <HomeBtnText>Search Flight</HomeBtnText>
          </HomeButton>
          <HomeButton block onPress={() => navigation.navigate("Signin")}>
            <HomeBtnText>Sign in</HomeBtnText>
          </HomeButton>
          <HomeButton
            style={styles.account}
            block
            onPress={() => navigation.navigate("Profile")}
          >
            <HomeBtnText>My Account</HomeBtnText>
          </HomeButton>
        </View>
      </View>
    </ImageBackground>

    /*
     */

    /* 
   
      <HomeButton block onPress={() => navigation.navigate("Signup")}>
        <Text>Sign up</Text>
      </HomeButton>
      {user && (
        <View>
          <Logout onPress={() => dispatch(signout(navigation))}>
            {user.username}, Logout
          </Logout>
        </View>
      )} */
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(141, 153, 174, 0.4)",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  account: {
    marginLeft: 120,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
});

// background, welcome message, if user (username & logout btn/icon) else (sign in btn)
