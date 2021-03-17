import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import Loading from "../Loading";
import ProfileItem from "./ProfileItem";

// Styling
import {
  View,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Input,
  Label,
  H2,
} from "native-base";
import { UpdateButton } from "./styles";

// Actions
import { fetchHistory, updateUser } from "../../store/actions/authActions";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  const currentUser = authReducer.user;
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  if (authReducer.loading) return <Loading />;

  const flights = authReducer.history.map((flight) => (
    <ProfileItem flight={flight} key={flight.id} />
  ));

  const updateuser = () => {
    dispatch(updateUser(user, navigation));
  };

  const showButton = () => {
    return (
      user.email !== currentUser.email ||
      user.firstName !== currentUser.firstName ||
      user.lastName !== currentUser.lastName
    );
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
              <Text>{currentUser.username}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Label>First Name:</Label>
          <Input
            value={user.firstName}
            onChangeText={(firstName) => setUser({ ...user, firstName })}
          />
          <Label>Last Name:</Label>
          <Input
            value={user.lastName}
            onChangeText={(lastName) => setUser({ ...user, lastName })}
          />
          <Label>Email:</Label>
          <Input
            value={user.email}
            onChangeText={(email) => setUser({ ...user, email })}
          />
        </CardItem>
      </Card>
      {showButton() && (
        <UpdateButton block onPress={updateuser}>
          <Text>Save Changes</Text>
        </UpdateButton>
      )}
      <H2>Booked Flights</H2>
      {flights}
    </View>
  );
};

export default Profile;
