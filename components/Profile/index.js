import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistory, updateUser } from "../../store/actions/authActions";

//Components
import ProfileItem from "./ProfileItem";
import Loading from "../Loading";

// Styling Components
import {
  View,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Input,
  Label,
  H2,
} from "native-base";
import { UpdateButton } from "./styles";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  const curruser = authReducer.user;
  const [user, setUser] = useState(curruser);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  if (authReducer.loading) return <Loading />;

  // console.log("user flights", authReducer.history);
  const flights = authReducer.history.map((flight) => (
    <ProfileItem flight={flight} key={flight.id} />
  ));

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
      {/* remove inline styling */}
      {user.email !== curruser.email && (
        <UpdateButton block onPress={updateuser}>
          <Text>Save Changes</Text>
        </UpdateButton>
      )}
      <H2>Booked Flights</H2>
      {/* <ProfileItem /> */}
      {flights}
    </View>
  );
};

export default Profile;
