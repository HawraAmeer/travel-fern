import React from "react";
import { View, Label, Text, Icon } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const DepDate = ({ flight, setFlight, display, setDisplay }) => {
  return (
    <View style={{ marginLeft: 30 }}>
      <Label>
        <Icon type="AntDesign" name="calendar" />
        <Text> Departure Date</Text>
      </Label>
      <DateTimePicker
        testID="dateTimePicker"
        value={display.depDate}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={(event, depDate) => {
          setFlight({
            ...flight,
            depDate: moment(depDate).format("YYYY-MM-DD"),
          });
          setDisplay({ ...display, depDate });
        }}
        minimumDate={new Date()}
      />
    </View>
  );
};

export default DepDate;