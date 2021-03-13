import React, { useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Input,
  Label,
} from "native-base";

// Actions
import { updateUser } from "../../store/actions/authActions";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const curruser = useSelector((state) => state.authReducer.user);
  const [user, setUser] = useState(curruser);
  const updateuser = () => {
    dispatch(updateUser(user, navigation));
  };
  return (
    <View>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png",
              }}
            />

            <Body>
              <Text>{curruser.username}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Label>Email:</Label>
          <Input
            value={user.email}
            onChangeText={(email) => setUser({ ...user, email })}
          />
        </CardItem>
      </Card>
      {user.email !== curruser.email && (
        <Button block style={{ margin: 15 }} onPress={updateuser}>
          <Text>Save Changes</Text>
        </Button>
      )}
    </View>
  );
};

export default Profile;
