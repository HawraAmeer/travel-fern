import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Profile from "../Profile";
import Home from "../Home";
import Locations from "../Search/Locations";
import Search from "../Search";
import FlightList from "../FlightList";
import Filter from "../Filter";
import PassengerForm from "../PassengerForm";
import Booking from "../Booking";

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
        <Screen name="Signin" component={Signin} />
        <Screen name="Signup" component={Signup} />
        <Screen name="Profile" component={Profile} />
        <Screen
          name="Locations"
          component={Locations}
          options={{ title: "Select Location", headerLeft: null }}
        />
        <Screen name="SearchFlight" component={Search} />
        <Screen name="FlightList" component={FlightList} />
        <Screen
          name="Filter"
          component={Filter}
          options={{ headerLeft: null }}
        />
        <Screen name="Passenger" component={PassengerForm} />
        <Screen name="Booking" component={Booking} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
