import React from "react";
import { CardItem, Text, Left, Right } from "native-base";
import { BookButtonStyled } from "../FlightItem/styles";
import { useNavigation } from "@react-navigation/native";
const BookBtn = () => {
  const navigation = useNavigation();
  return (
    <CardItem>
      <Left></Left>
      <Right>
        <BookButtonStyled
          bordered
          rounded
          info
          onPress={() => navigation.navigate("Passenger")}
        >
          <Text>Book</Text>
        </BookButtonStyled>
      </Right>
    </CardItem>
  );
};

export default BookBtn;
