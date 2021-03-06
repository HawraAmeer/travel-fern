import React, { useState } from "react";
import { useSelector } from "react-redux";

// Styling
import { Input, Text, View, Item, Icon, List, ListItem } from "native-base";
import { AirIcon, CancelButton, LocationName } from "./styles";

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
      <LocationName>{location.name}</LocationName>
    </ListItem>
  ));
  return (
    <View>
      <Item>
        <AirIcon type="EvilIcons" name="search" />
        <Input placeholder="Search..." onChangeText={setQuery} />
      </Item>
      <List>{locList}</List>
      <CancelButton block onPress={() => navigation.goBack()}>
        <Text>Cancel</Text>
      </CancelButton>
    </View>
  );
};

export default Locations;
