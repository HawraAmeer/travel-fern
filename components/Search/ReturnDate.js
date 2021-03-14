import React from "react";
import { View, Label, Text, Icon } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const ReturnDate = ({ flight, setFlight, display, setDisplay }) => {
  return (
    <View style={{ marginLeft: 30 }}>
      <Label>
        <Icon type="AntDesign" name="calendar" />
        <Text> Return Date</Text>
      </Label>
      <DateTimePicker
        testID="dateTimePicker"
        value={display.returnDate}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={(event, returnDate) => {
          setFlight({
            ...flight,
            returnDate: moment(returnDate).format("YYYY-MM-DD"),
          });
          setDisplay({ ...display, returnDate });
        }}
        minimumDate={display.depDate}
      />
    </View>
  );
};

export default ReturnDate;
