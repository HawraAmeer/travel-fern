import React from "react";

// Styling Components
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
const FlightItem = ({ flight }) => {
  return (
    <FlightCard>
      <CardItem>
        <Left>
          {/* put image in assets than import it, or put the one that comes from backend */}
          <Thumbnail
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWM07oCcvw217wXFGgdKeHUVyY98bLApfZw&usqp=CAU",
            }}
          />
          <Body>
            <AirlineText>{flight.airline.name}</AirlineText>
          </Body>
        </Left>
        <Right>
          <AirlineText>{flight.price} BHD</AirlineText>
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
      <BookBtn flight={flight} />
    </FlightCard>
  );
};

export default FlightItem;
