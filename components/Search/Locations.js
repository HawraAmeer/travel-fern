import React, { useState } from "react";
import {
  Input,
  Text,
  View,
  Item,
  Icon,
  Button,
  List,
  ListItem,
} from "native-base";
import { useSelector } from "react-redux";

// Components
import Loading from "../Loading";

const Locations = ({ navigation, route }) => {
  const [query, setQuery] = useState("");
  const locations = useSelector((state) => state.locationReducer.locations);
  const loading = useSelector((state) => state.locationReducer.loading);

  if (loading) return <Loading />;

  const filtredLocations = locations.filter((location) => {
    if (location) {
      return location.name.toLowerCase().includes(query.toLowerCase());
    }
  });

  const locList = filtredLocations.map((location) => (
    <ListItem
      onPress={() => {
        route.params.setFlight({
          ...route.params.flight,
          [route.params.request]: location.id,
        });
        route.params.setDisplay({
          ...route.params.display,
          [route.params.request]: location.name,
        });
        navigation.navigate("SearchFlight");
      }}
      key={location.id}
    >
      <Text>{location.name}</Text>
    </ListItem>
  ));
  return (
    <View>
      <Item>
        <Icon type="EvilIcons" name="search" />
        <Input placeholder="Search..." onChangeText={setQuery} />
      </Item>
      <List>{locList}</List>
      <Button block style={{ margin: 15 }} onPress={() => navigation.goBack()}>
        <Text>Cancel</Text>
      </Button>
    </View>
  );
};

export default Locations;
