import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Icon, Button, Text, Content } from "native-base";
import moment from "moment";
// Styles
import { DatesTextStyled, TitleTextSyled, TitleViewStyled } from "./styles";

// Components
import FlightItem from "../FlightItem";
import Loading from "../Loading";

const FlightList = ({ navigation, route }) => {
  const flightsReducer = useSelector((state) => state.flightReducer);
  const locations = useSelector((state) => state.locationReducer.locations);
  if (flightsReducer.loading) return <Loading />;

  const searchedFlight = flightsReducer.searchedFlight;
  const departure = locations.find(
    (location) => location.id === searchedFlight.depAirport
  );
  const arrival = locations.find(
    (location) => location.id === searchedFlight.arrAirport
  );

  let flightList = flightsReducer.flights;

  //if user filter
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
          <TitleTextSyled>{departure.name}</TitleTextSyled>
          <Icon type="AntDesign" name="arrowright" />
          <TitleTextSyled>{arrival.name}</TitleTextSyled>
        </TitleViewStyled>
        <DatesTextStyled>
          {moment(searchedFlight.depDate).format("dddd, D MMMM")}
        </DatesTextStyled>
        {_flightList}
        {flightList.length > 1 && (
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
        )}
      </View>
    </Content>
  );
};

export default FlightList;
