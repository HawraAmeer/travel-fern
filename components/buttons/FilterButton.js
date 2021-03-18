import { View, Button } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { FilterIcon } from "./styles";
import { useNavigation } from "@react-navigation/native";

const FilterButton = () => {
  const navigation = useNavigation();
  const flights = useSelector((state) => state.flightReducer.flights);
  return (
    <View>
      {flights.length > 1 && (
        <Button transparent>
          <FilterIcon
            type="AntDesign"
            name="filter"
            onPress={() => {
              navigation.navigate("Filter", {
                flights: flights,
              });
            }}
          />
        </Button>
      )}
    </View>
  );
};

export default FilterButton;
