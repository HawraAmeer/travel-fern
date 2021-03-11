import React, { useState } from "react";
import { View } from "react-native";
import { Form, Item, Input, Label, Text, Icon } from "native-base";

import moment from "moment";
const Search = () => {
  return (
    <View>
      <Form>
        <Item>
          <Icon type="MaterialCommunityIcons" name="airplane-takeoff" />
          <Input placeholder="From" />
        </Item>
        <Item>
          <Icon type="MaterialCommunityIcons" name="airplane-landing" />
          <Input placeholder="To" />
        </Item>
        <Item>
          <Icon type="AntDesign" name="calendar" />
          <Input placeholder="Departure Date" />
        </Item>
        <Item>
          <Icon type="AntDesign" name="calendar" />
          <Input placeholder="Return Date" />
        </Item>
      </Form>
    </View>
  );
};

export default Search;
