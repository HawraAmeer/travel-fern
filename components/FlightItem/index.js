import React from "react";

// Styling
import {
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Item,
} from "native-base";
import { AirlineText, FlightCard, LocCardItem, TimeText } from "./styles";

// Components
import LineSection from "./LineSection";
import BookBtn from "../buttons/BookBtn";

const FlightItem = ({ flight, Flightlist, searchedFlight }) => {
  return (
    <FlightCard>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: flight.airline.logo }} />
          <Body>
            <AirlineText>{flight.airline.name}</AirlineText>
          </Body>
        </Left>
        <Right>
          <AirlineText>
            {searchedFlight.seat === "economy" ? flight.ePrice : flight.bPrice}
            BHD
          </AirlineText>
        </Right>
      </CardItem>
      <CardItem cardBody>
        <Left>
          <TimeText>{flight.depTime}</TimeText>
        </Left>
        <Right>
          <TimeText>{flight.arrTime}</TimeText>
        </Right>
      </CardItem>
      <LineSection />
      <LocCardItem cardBody>
        <Left>
          <Text>{flight.departure.name}</Text>
        </Left>
        <Right>
          <Text>{flight.arrival.name}</Text>
        </Right>
      </LocCardItem>
      <Item></Item>
      {Flightlist && <BookBtn flight={flight} />}
    </FlightCard>
  );
};

export default FlightItem;
