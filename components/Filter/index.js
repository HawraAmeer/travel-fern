import React, { useState } from "react";

// Styling
import { View, Picker, Text } from "native-base";
import { FliterButton } from "./style";

// Components
import Price from "./Price";
import Time from "./Time";
import Airline from "./Airline";

const Filter = ({ navigation, route }) => {
  const maxRange = () => {
    let max = 0;
    route.params.flights.forEach((flight) => {
      if (flight.price > max) max = flight.price;
    });
    return max;
  };
  const minRange = () => {
    let min = maxRange();
    route.params.flights.forEach((flight) => {
      if (flight.price < min) min = flight.price;
    });
    return min;
  };

  const [filter, setFilter] = useState({
    price: maxRange(),
    time: "",
    airline: "",
  });

  let airlines = route.params.flights.map((flight) => flight.airline.name);
  const airlineSet = new Set(airlines);
  airlines = [...airlineSet];

  const airlinesList = airlines.map((name) => (
    <Picker.Item label={name} value={name} key={name} />
  ));

  return (
    <View>
      {minRange() !== maxRange() && (
        <Price
          filter={filter}
          setFilter={setFilter}
          min={minRange()}
          max={maxRange()}
        />
      )}

      <Time filter={filter} setFilter={setFilter} />

      {airlinesList.length > 1 && (
        <Airline
          filter={filter}
          setFilter={setFilter}
          airlinesList={airlinesList}
        />
      )}

      <FliterButton
        block
        onPress={() => navigation.navigate("FlightList", { filter })}
      >
        <Text>Filter</Text>
      </FliterButton>
    </View>
  );
};

export default Filter;
