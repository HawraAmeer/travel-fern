import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Components
import Signin from "../authentication/Signin";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Sign-in"
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
        <Screen
          name="Sign-in"
          component={Signin}
          // options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
