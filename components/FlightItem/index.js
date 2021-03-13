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
const FlightItem = () => {
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
            <AirlineTextStyled>Gulf Air</AirlineTextStyled>
          </Body>
        </Left>
        <Right>
          <AirlineTextStyled>90 BHD</AirlineTextStyled>
        </Right>
      </CardItem>
      <CardItem cardBody>
        <Left>
          <TimeTextStyled>22:30</TimeTextStyled>
        </Left>
        <Right>
          <TimeTextStyled>23:59</TimeTextStyled>
        </Right>
      </CardItem>
      <LineSection />
      <LocCardItemStyled cardBody>
        <Left>
          <Text>Bahrain BAH</Text>
        </Left>
        <Right>
          <Text>Dubai DXB</Text>
        </Right>
      </LocCardItemStyled>
      <Item></Item>
      <BookBtn />
    </FlightCardStyled>
  );
};

export default FlightItem;
