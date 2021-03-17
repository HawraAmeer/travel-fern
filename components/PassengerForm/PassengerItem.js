import React, { useState } from "react";

// Styling Components
import { View, ListItem, Picker, Input, Text } from "native-base";
import {
  AddButton,
  PassItem,
  PassLabel,
  PassText,
  PickerArrow,
} from "./styles";

const PassengerItem = ({ passengers, setPassengers, passengerNum }) => {
  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    ageGroup: "adult",
  });
  const [addBtn, setAddBtn] = useState(true);
  const addPassenger = () => {
    setPassengers([...passengers, passenger]);
    setAddBtn(false);
  };
  return (
    <View>
      <ListItem itemDivider>
        <PassText>Passenger {passengerNum}</PassText>
      </ListItem>
      <PassItem inlineLabel>
        <PassLabel>First Name:</PassLabel>
        <Input
          onChangeText={(firstName) =>
            setPassenger({ ...passenger, firstName })
          }
          value={passenger.firstName}
        />
      </PassItem>
      <PassItem inlineLabel last>
        <PassLabel>Last Name:</PassLabel>
        <Input
          onChangeText={(lastName) => setPassenger({ ...passenger, lastName })}
          value={passenger.lastName}
        />
      </PassItem>
      <PassItem picker>
        <Picker
          iosIcon={<PickerArrow type="AntDesign" name="down" />}
          selectedValue={passenger.ageGroup}
          onValueChange={(ageGroup) => {
            setPassenger({ ...passenger, ageGroup });
          }}
        >
          <Picker.Item label="Adult (>12 years)" value="adult" />
          <Picker.Item label="Child (2-12 years)" value="child" />
          <Picker.Item label="Infant (<2 years)" value="infant" />
        </Picker>
      </PassItem>
      {addBtn && (
        <AddButton rounded bordered onPress={addPassenger}>
          <Text>Add</Text>
        </AddButton>
      )}
    </View>
  );
};

export default PassengerItem;
