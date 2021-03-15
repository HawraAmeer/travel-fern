import React from "react";
import { View, Icon, Button, Text } from "native-base";

// Styles
import { DatesTextStyled, TitleTextSyled, TitleViewStyled } from "./styles";

// Components
import FlightItem from "../FlightItem";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const FlightList = ({ navigation }) => {
  const flightReducer = useSelector((state) => state.flightReducer);

  if (flightReducer.loading) return <Loading />;

  const flightList = flightReducer.flights.map((flight) => (
    <FlightItem flight={flight} key={flight.id} />
  ));
  return (
    <View>
      <TitleViewStyled>
        <TitleTextSyled>Manama</TitleTextSyled>
        <Icon type="AntDesign" name="arrowright" />
        <TitleTextSyled> Dubai</TitleTextSyled>
      </TitleViewStyled>
      <DatesTextStyled>Sun, 21 Mar - Sun, 28 Mar </DatesTextStyled>
      {flightList}
      <Button block onPress={() => navigation.navigate("Filter")}>
        <Text>Filter</Text>
      </Button>
    </View>
  );
};

export default FlightList;
