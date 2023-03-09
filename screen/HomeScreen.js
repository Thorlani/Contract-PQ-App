import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Articles from "../components/Articles";
import axios from "axios";
import Settings from "./AboutScreen";
import Preview from "../components/Preview";
import ReadingScreen from "./ReadingScreen";

export default function HomeScreen({ navigation }) {
  const Stack = createStackNavigator();

  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-law-pq.vercel.app/api/getContract")
      .then((res) => {
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  const HomeHeader = () => {
    return (
      <View
        style={{
          height: 130,
          paddingTop: 40,
          backgroundColor: "#392061",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "900" }}>
          Contract Past Question
        </Text>
      </View>
    );
  };

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Preview}
          options={{
            header: () => <HomeHeader />,
          }}
        />
        <Stack.Screen
          name="Read"
          component={ReadingScreen}
          options={{
            title: "Back",
            headerStyle: {
              height: 130,
              backgroundColor: "#392061",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10%",
    paddingHorizontal: "5%",
  },
});
