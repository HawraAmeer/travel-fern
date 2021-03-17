import React, { useState } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

// Styling Components
import { View, Label, Picker, Text, Item } from "native-base";
import {
  AirlineItem,
  DownIcon,
  FliterButton,
  PriceItem,
  PriceText,
  TimeItem,
  TimeText,
} from "./style";

const Filter = ({ navigation, route }) => {
  const maxRange = () => {
    let max = 0;
    route.params.flights.forEach((flight) => {
      if (flight.price > max) max = flight.price;
    });
    return max;
  };
  const [filter, setFilter] = useState({
    price: maxRange(),
    time: "",
    airline: "",
  });
  const minRange = () => {
    let min = maxRange();
    route.params.flights.forEach((flight) => {
      if (flight.price < min) min = flight.price;
    });
    return min;
  };

  let airlines = route.params.flights.map((flight) => flight.airline.name);
  const airlineSet = new Set(airlines);
  airlines = [...airlineSet];

  const airlinesList = airlines.map((name) => (
    <Picker.Item label={name} value={name} key={name} />
  ));

  return (
    // we can put some sections into components
    <View>
      <PriceText>
        Price {"\n"} {filter.price} BHD
      </PriceText>
      <Item>
        <PriceItem>
          <MultiSlider
            min={minRange()}
            max={maxRange()}
            onValuesChange={(e) => {
              setFilter({ ...filter, price: e[0] });
            }}
          />
        </PriceItem>
      </Item>

      <TimeText>
        Time {"\n"}
        {filter.time
          ? `${filter.time - 4}:00 - ${filter.time}:00`
          : "00:00 - 23:59"}
      </TimeText>
      <Item>
        <TimeItem>
          <MultiSlider
            min={4}
            max={24}
            step={4}
            onValuesChange={(e) => setFilter({ ...filter, time: e[0] })}
          />
        </TimeItem>
      </Item>
      <AirlineItem>
        <Label>Airline</Label>
        <Picker
          iosIcon={<DownIcon type="AntDesign" name="down" />}
          selectedValue={filter.airline}
          onValueChange={(airline) => {
            setFilter({ ...filter, airline });
          }}
        >
          {airlinesList}
        </Picker>
      </AirlineItem>
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
