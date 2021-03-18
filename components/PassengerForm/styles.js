import styled from "styled-components";
import { Button, Icon, Input, Item, Label, ListItem, Text } from "native-base";

export const PassItem = styled(Item)`
  padding: 5px 0px;
`;

export const PassLabel = styled(Label)`
  margin-left: 15px;
  color: #2b2d42;
  font-size: 18px;
`;

export const PassengerInput = styled(Input)`
  color: #2b2d42;
  font-size: 18px;
`;

export const PickerArrow = styled(Icon)`
  margin-left: 340px;
  position: absolute;
`;

export const PassText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #edf2f4;
`;
export const NextButton = styled(Button)`
  margin: 25px 20px;
  background-color: #2b2d42;
`;
export const AddButton = styled(Button)`
  align-self: flex-end;
  margin: 15px;
  height: 35px;
`;
export const PassengerDivider = styled(ListItem)`
  background-color: #2b2d42;
`;
