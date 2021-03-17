import React from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

// Styling
import { View, Item } from "native-base";
import { PriceItem, PriceText } from "./style";

const Price = ({ filter, setFilter, min, max }) => {
  return (
    <View>
      <PriceText>
        Price {"\n"} {filter.price} BHD
      </PriceText>
      <Item>
        <PriceItem>
          <MultiSlider
            min={min}
            max={max}
            onValuesChange={(e) => {
              setFilter({ ...filter, price: e[0] });
            }}
          />
        </PriceItem>
      </Item>
    </View>
  );
};

export default Price;
