import React from "react";
import {
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Item,
} from "native-base";

// Styles
import {
  AirlineTextStyled,
  FlightCardStyled,
  LocCardItemStyled,
  TimeTextStyled,
} from "./styles";

// Components
import LineSection from "./LineSection";
import BookBtn from "../buttons/BookBtn";
const FlightItem = ({ flight }) => {
  return (
    <FlightCardStyled>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWM07oCcvw217wXFGgdKeHUVyY98bLApfZw&usqp=CAU",
            }}
          />
          <Body>
            <AirlineTextStyled>{flight.airline.name}</AirlineTextStyled>
          </Body>
        </Left>
        <Right>
          <AirlineTextStyled>{flight.price} BHD</AirlineTextStyled>
        </Right>
      </CardItem>
      <CardItem cardBody>
        <Left>
          <TimeTextStyled>{flight.depTime}</TimeTextStyled>
        </Left>
        <Right>
          <TimeTextStyled>{flight.arrTime}</TimeTextStyled>
        </Right>
      </CardItem>
      <LineSection />
      <LocCardItemStyled cardBody>
        <Left>
          <Text>{flight.departure.name}</Text>
        </Left>
        <Right>
          <Text>{flight.arrival.name}</Text>
        </Right>
      </LocCardItemStyled>
      <Item></Item>
      <BookBtn />
    </FlightCardStyled>
  );
};

export default FlightItem;
