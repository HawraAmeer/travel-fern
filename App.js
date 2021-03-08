import React from "react";
import { Provider } from "react-redux";

// Store
import store from "./store";

// Components
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
