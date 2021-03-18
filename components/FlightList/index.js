import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

// Styling
import { View, Icon, Button, Text, Content } from "native-base";
import { DatesText, TitleText, TitleView } from "./styles";

// Components
import Loading from "../Loading";
import FlightItem from "../FlightItem";
import { AirIcon } from "../Search/styles";

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

  if (route.params && route.params.filter) {
    const filter = route.params.filter;

    if (filter.price) {
      flightList = flightList.filter((flight) => {
        if (searchedFlight.seat === "economy")
          return flight.ePrice <= filter.price;
        else return flight.bPrice <= filter.price;
      });
    }

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
    route.params = undefined;
  }

  const _flightList = flightList.map((flight) => (
    <FlightItem
      flight={flight}
      key={flight.id}
      Flightlist="Flightlist"
      searchedFlight={searchedFlight}
    />
  ));

  return (
    <Content>
      <View>
        <TitleView>
          <TitleText>{departure.name}</TitleText>
          <AirIcon type="AntDesign" name="arrowright" />
          <TitleText>{arrival.name}</TitleText>
        </TitleView>
        <DatesText>
          {moment(searchedFlight.depDate).format("dddd, D MMMM")}
        </DatesText>
        {_flightList}
      </View>
    </Content>
  );
};

export default FlightList;
