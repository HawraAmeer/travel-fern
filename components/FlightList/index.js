import React, { useState } from "react";
import { View, Icon, Button, Text, Content } from "native-base";

// Styles
import { DatesTextStyled, TitleTextSyled, TitleViewStyled } from "./styles";

// Components
import FlightItem from "../FlightItem";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const FlightList = ({ navigation, route }) => {
  const flightsReducer = useSelector((state) => state.flightReducer);

  if (flightsReducer.loading) return <Loading />;

  let flightList = flightsReducer.flights;
  if (route.params) {
    const filter = route.params.filter;

    if (filter.price)
      flightList = flightList.filter((flight) => flight.price <= filter.price);

    if (filter.airline)
      flightList = flightList.filter(
        (flight) => flight.airline.name === filter.airline
      );

    if (filter.time)
      flightList = flightList.filter(
        (flight) =>
          +flight.depTime.split(":")[0] >= +(filter.time - 4) &&
          +flight.depTime.split(":")[0] < +filter.time
      );
  }

  const _flightList = flightList.map((flight) => (
    <FlightItem flight={flight} key={flight.id} />
  ));
  return (
    <Content>
      <View>
        <TitleViewStyled>
          <TitleTextSyled>Manama</TitleTextSyled>
          <Icon type="AntDesign" name="arrowright" />
          <TitleTextSyled> Dubai</TitleTextSyled>
        </TitleViewStyled>
        <DatesTextStyled>Sun, 21 Mar - Sun, 28 Mar </DatesTextStyled>
        {_flightList}
        <Button
          block
          onPress={() => {
            (flights = flightsReducer.flights),
              navigation.navigate("Filter", {
                flights,
              });
          }}
        >
          <Text>Filter</Text>
        </Button>
      </View>
    </Content>
  );
};

export default FlightList;
