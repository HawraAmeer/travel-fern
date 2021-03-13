import React from "react";
import { CardItem, Text, Left, Right } from "native-base";
import { BookButtonStyled } from "../FlightItem/styles";
const BookBtn = () => {
  return (
    <CardItem>
      <Left></Left>
      <Right>
        <BookButtonStyled bordered rounded info>
          <Text>Book</Text>
        </BookButtonStyled>
      </Right>
    </CardItem>
  );
};

export default BookBtn;
