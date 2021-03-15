import React from "react";
import { View, ListItem, Picker, Input } from "native-base";
import {
  PassItemStyled,
  PassLabelStyled,
  PassTextStyled,
  PickerArrow,
} from "./styles";
const PassengerItem = ({ passenger, setPassenger }) => {
  return (
    <View>
      <ListItem itemDivider>
        <PassTextStyled>Passenger 1</PassTextStyled>
      </ListItem>
      <PassItemStyled inlineLabel>
        <PassLabelStyled>First Name:</PassLabelStyled>
        <Input
          onChangeText={(firstName) =>
            setPassenger({ ...passenger, firstName })
          }
          value={passenger.firstName}
        />
      </PassItemStyled>
      <PassItemStyled inlineLabel last>
        <PassLabelStyled>Last Name:</PassLabelStyled>
        <Input
          onChangeText={(lastName) => setPassenger({ ...passenger, lastName })}
          value={passenger.lastName}
        />
      </PassItemStyled>
      <PassItemStyled picker>
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
      </PassItemStyled>
    </View>
  );
};

export default PassengerItem;
