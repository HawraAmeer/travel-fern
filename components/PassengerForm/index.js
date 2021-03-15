import React, { useState } from "react";
import { List, Text, Content, Button } from "native-base";
import PassengerItem from "./PassengerItem";

const PassengerForm = () => {
  const groups = ["Infant", "Child", "Adult"];
  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    ageGroup: "adult",
  });
  return (
    <Content>
      <List>
        <PassengerItem passenger={passenger} setPassenger={setPassenger} />
      </List>
      <Button
        block
        style={{ margin: 15 }}
        onPress={() => console.log(passenger)}
      >
        <Text>Next</Text>
      </Button>
    </Content>
  );
};

export default PassengerForm;
