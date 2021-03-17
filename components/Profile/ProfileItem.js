import { View, Text, Card, CardItem } from "native-base";
import React from "react";

const ProfileItem = ({ flight }) => {
  return (
    <View>
      <Card>
        <CardItem>
          <Text>Bahrain to Dubai </Text>
        </CardItem>
        <CardItem>
          <Text> Depart at 2021-03-28 11:00</Text>
        </CardItem>
        <CardItem>
          <Text> arrive at 2021-03-28 12:30</Text>
        </CardItem>
        <CardItem>
          <Text> Economy Class</Text>
        </CardItem>
      </Card>
    </View>
  );
};

export default ProfileItem;
