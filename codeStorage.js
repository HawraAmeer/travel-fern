// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

<View style={styles.container}>
  <Text>Open up App.js to start working on your app!</Text>
  <StatusBar style="auto" />
</View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// Store > index.js
// Actions
import { checkForToken } from "./actions/authActions";
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopActions";

store.dispatch(checkForToken());
store.dispatch(fetchShops());
store.dispatch(fetchProducts());
