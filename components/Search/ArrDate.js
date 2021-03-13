import React from "react";
import { View, Label, Text, Icon } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const ArrDate = ({ flight, setFlight, display, setDisplay }) => {
  return (
    <View style={{ marginLeft: 30 }}>
      <Label>
        <Icon type="AntDesign" name="calendar" />
        <Text> Return Date</Text>
      </Label>
      <DateTimePicker
        testID="dateTimePicker"
        value={display.arrDate}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={(event, arrDate) => {
          setFlight({
            ...flight,
            arrDate: moment(arrDate).format("YYYY-MM-DD"),
          });
          setDisplay({ ...display, arrDate });
        }}
        minimumDate={display.depDate}
      />
    </View>
  );
};

export default ArrDate;
