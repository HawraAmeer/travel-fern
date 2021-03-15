import React, { useState } from "react";
import { View, Label, Picker, Icon, Item, Text } from "native-base";

import MultiSlider from "@ptomasroos/react-native-multi-slider";

const Filter = () => {
  const [filter, setFilter] = useState({
    cost: 0,
    time: "",
    airline: "",
  });
  console.log("MWWWWWWW", filter);

  return (
    <View>
      <Text>Filter Lest</Text>
      <Item style={{ marginLeft: 50, marginTop: 70 }}>
        <Text>Price </Text>
        <MultiSlider
          enableLabel
          step={2}
          min={50}
          max={200}
          onValuesChangeFinish={(e) => {
            setFilter({ ...filter, cost: e[0] });
          }}
        />
      </Item>
      <Item style={{ marginLeft: 50, marginTop: 70 }}>
        <Text>Time </Text>
        <MultiSlider
          enableLabel
          step={2}
          min={50}
          max={200}
          onValuesChangeFinish={(e) => {
            setFilter({ ...filter, time: e[0] });
          }}
        />
      </Item>
      <Item>
        <Label>Airline</Label>
        <Picker
          iosIcon={
            <Icon type="AntDesign" name="down" style={{ marginLeft: 200 }} />
          }
          // selectedValue={flight.type}
          onValueChange={(airline) => {
            setFlight({ ...filter, airline });
          }}
        >
          <Picker.Item label="Roundtrip" value="roundtrip" />
          <Picker.Item label="One-way" value="oneweay" />
        </Picker>
      </Item>
    </View>
  );
};

export default Filter;
