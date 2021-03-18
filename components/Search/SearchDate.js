import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

// Styling
import { View, Label, Text, Icon } from "native-base";
import { AirIcon, DateView, SearchLabel } from "./styles";

const SearchDate = ({ flight, setFlight, display, setDisplay, type }) => {
  return (
    // remove inline styling
    <DateView>
      <Label>
        <AirIcon type="AntDesign" name="calendar" />
        <SearchLabel>
          {" "}
          {type === "depDate" ? "Departure" : "Return"} Date
        </SearchLabel>
      </Label>
      <DateTimePicker
        testID="dateTimePicker"
        value={type === "depDate" ? display.depDate : display.returnDate}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={(event, selectedDate) => {
          setFlight({
            ...flight,
            [type]: moment(selectedDate).format("YYYY-MM-DD"),
          });
          setDisplay({
            ...display,
            [type]: selectedDate,
          });
        }}
        minimumDate={type === "depDate" ? new Date() : display.depDate}
      />
    </DateView>
  );
};

export default SearchDate;
