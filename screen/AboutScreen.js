import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{}}>
          This is an educational application dedicated to providing answers to
          over 40+ sample questions of Law of Contract which can help Nigerian
          law undergraduates in their learning curve and preparation for their
          exams. We are using this platform to make our own contribution through
          teachings and giving out valuable information to better the lives of
          Nigerian law undergraduates.
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "900",
            color: "#392061",
            marginBottom: 10,
          }}
        >
          About The Developer
        </Text>
        <Text>
          He is a Frontend developer and also a law student at the University of
          Lagos. You can contact him by sending a mail to:
          davidthorlani@gmail.com
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: "10%",
    paddingHorizontal: "5%",
  },
});
