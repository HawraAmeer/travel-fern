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
import {
  AirlineText,
  FlightCard,
  LocationText,
  LocCardItem,
  TimeText,
} from "./styles";

// Components
import LineSection from "./LineSection";
import BookBtn from "../buttons/BookBtn";

const image = {
  uri:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWM07oCcvw217wXFGgdKeHUVyY98bLApfZw&usqp=CAU",
};
const FlightItem = ({ flight, Flightlist, searchedFlight }) => {
  return (
    <FlightCard>
      <CardItem>
        <Left>
          <Thumbnail source={image} />
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
          <LocationText>{flight.departure.name}</LocationText>
        </Left>
        <Right>
          <LocationText>{flight.arrival.name}</LocationText>
        </Right>
      </LocCardItem>
      <Item></Item>
      {Flightlist && <BookBtn flight={flight} />}
    </FlightCard>
  );
};

export default FlightItem;
