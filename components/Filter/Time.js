import React from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

// Styling
import { View, Item } from "native-base";
import { TimeItem, TimeText } from "./style";

const Time = ({ filter, setFilter }) => {
  return (
    <View>
      <TimeText>
        Time {"\n"}
        {filter.time
          ? `${filter.time - 4}:00 - ${filter.time}:00`
          : "00:00 - 23:59"}
      </TimeText>
      <Item>
        <TimeItem>
          <MultiSlider
            min={4}
            max={24}
            step={4}
            onValuesChange={(e) => setFilter({ ...filter, time: e[0] })}
          />
        </TimeItem>
      </Item>
    </View>
  );
};

export default Time;
