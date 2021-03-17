import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

// Styling
import { View, Label, Text, Icon } from "native-base";

const Date = ({ flight, setFlight, display, setDisplay, type }) => {
  return (
    // remove inline styling
    <View style={{ marginLeft: 30 }}>
      <Label>
        <Icon type="AntDesign" name="calendar" />
        <Text> {type === "dep" ? "Departure" : "Return"} Date</Text>
      </Label>
      <DateTimePicker
        testID="dateTimePicker"
        value={type === "dep" ? display.depDate : display.returnDate}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={(event, depDate) => {
          setFlight({
            ...flight,
            [type === "dep" ? depDate : returnDate]: moment(depDate).format(
              "YYYY-MM-DD"
            ),
          });
          setDisplay({
            ...display,
            [type === "dep" ? depDate : returnDate]:
              type === "dep" ? display.depDate : display.returnDate,
          });
        }}
        minimumDate={new Date()}
      />
    </View>
  );
};

export default Date;
