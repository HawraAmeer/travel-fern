import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Profile from "../Profile";
import Home from "../Home";
import Search from "../Search";
import Locations from "../Search/Locations";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerStyle: {
            backgroundColor: "white",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="SearchFlight" component={Search} />
        <Screen
          name="Locations"
          component={Locations}
          options={{ title: "Select Location", headerLeft: null }}
        />
        <Screen name="Profile" component={Profile} />
        <Screen name="Signup" component={Signup} />
        <Screen name="Signin" component={Signin} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
