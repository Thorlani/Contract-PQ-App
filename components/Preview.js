import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import axios from "axios";
import Articles from "./Articles";

export default function Preview({ navigation }) {
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

  return (
    <SafeAreaView style={styles.container}>
      {isloading === true ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          keyExtractor={(item) => item._id}
          data={response}
          renderItem={({ item }) => {
            return (
              <Articles
                question={item.question}
                date={item.date}
                answer={item.answer}
                id={item._id}
                navigation={navigation}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
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
});
