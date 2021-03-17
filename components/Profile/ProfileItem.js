import {
  View,
  Text,
  Card,
  CardItem,
  List,
  ListItem,
  Body,
  Right,
} from "native-base";
import React from "react";

const ProfileItem = ({ flight }) => {
  const departure = flight.Flights[0];
  const returned = flight.Flights[1];
  return (
    <View>
      <List>
        <ListItem>
          <Body>
            <Text note>{departure.airline.name}</Text>
            <Text>{departure.depDate}</Text>
            <Text>{departure.departure.name} to</Text>
            <Text>{departure.arrival.name}</Text>
            <Text>Depart at {departure.depTime}</Text>
            <Text>Arrive at {departure.arrTime}</Text>
          </Body>
          <Right>
            <Text>{departure.price} BHD</Text>
          </Right>
        </ListItem>
        {returned && (
          <ListItem>
            <Body>
              <Text note>{returned.airline.name}</Text>
              <Text>{returned.depDate}</Text>
              <Text>{returned.departure.name} to</Text>
              <Text>{returned.arrival.name}</Text>
              <Text>Depart at {returned.depTime}</Text>
              <Text>Arrive at {returned.arrTime}</Text>
            </Body>
            <Right>
              <Text>{returned.price} BHD</Text>
            </Right>
          </ListItem>
        )}
      </List>
    </View>
  );
};

export default ProfileItem;
