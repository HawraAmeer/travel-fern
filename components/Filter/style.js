import styled from "styled-components";
import { View, Text, Item, Icon, Button, Label } from "native-base";

export const PriceText = styled(Text)`
  margin: 20px 50px 120px;
  margin-bottom: 50px;
  text-align: center;
  color: #2b2d42;
  font-size: 18px;
`;

export const PriceItem = styled(View)`
  margin-left: 60px;
  margin-top: -50px;
`;
export const TimeText = styled(Text)`
  margin: 20px 50px 120px;
  margin-bottom: 50px;
  text-align: center;
  color: #2b2d42;
  font-size: 18px;
`;

export const TimeItem = styled(View)`
  margin-left: 60px;
  margin-top: -50px;
`;

export const AirlineItem = styled(Item)`
  padding: 5px 0px;
  padding-left: 18px;
`;

export const DownIcon = styled(Icon)`
  margin-left: 280px;
  position: absolute;
`;

export const FliterButton = styled(Button)`
  margin: 25px 20px;
  background-color: #2b2d42;
  color: #e0fbfc;
`;

export const AirlineLabel = styled(Label)`
  color: #2b2d42;
  font-size: 18px;
`;
