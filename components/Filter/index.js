import React, { useState } from "react";

// Styling
import { View, Picker, Text } from "native-base";
import { FliterButton } from "./style";

// Components
import Price from "./Price";
import Time from "./Time";
import Airline from "./Airline";
import { useSelector } from "react-redux";

const Filter = ({ navigation, route }) => {
  const searchedFlight = useSelector(
    (state) => state.flightReducer.searchedFlight
  );
  const seatPrice = searchedFlight.seat === "economy" ? "ePrice" : "bPrice";

  const maxRange = () => {
    let max = 0;
    route.params.flights.forEach((flight) => {
      if (flight[seatPrice] > max) max = flight[seatPrice];
    });
    return max;
  };

  const minRange = () => {
    let min = maxRange();
    route.params.flights.forEach((flight) => {
      if (flight[seatPrice] < min) min = flight[seatPrice];
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

      <Airline
        filter={filter}
        setFilter={setFilter}
        airlinesList={airlinesList}
      />

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
