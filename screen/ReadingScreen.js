import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  View,
  ActivityIndicator,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import axios from "axios";
import RenderHtml from "react-native-render-html";

export default function ReadingScreen({ route, navigation }) {
  const { width } = useWindowDimensions();
  const { postId } = route.params;

  let [isloading, setIsLoading] = useState(true);
  let [error, setError] = useState([]);
  let [response, setResponse] = useState([]);

  useEffect(() => {
    axios
      .get(`https://be-law-pq.vercel.app/api/getContract/${postId}`)
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const source = {
    html: response.answer,
  };

  return (
    <SafeAreaView style={styles.container}>
      {isloading === true ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View key={response._id}>
            <Text style={styles.question}>{response.question}</Text>
            <RenderHtml
              contentWidth={width}
              source={source}
              enableExperimentalMarginCollapsing={true}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
  },
  question: {
    fontSize: 28,
    fontWeight: "800",
    marginVertical: 20,
    color: "#392061",
  },
});
