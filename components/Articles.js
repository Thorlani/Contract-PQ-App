import React from "react";
import {
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import RenderHtml from "react-native-render-html";

export default function Articles({ question, date, answer, id, navigation }) {
  const { width } = useWindowDimensions();

  const truncateAnswer = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...Read More";
    } else {
      return str;
    }
  };

  const truncateDate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  };

  const source = {
    html: truncateAnswer(answer, 200),
  };

  const tagsStyles = {
    p: {
      textColor: "#12032B",
    },
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Read", { postId: id })}
    >
      <View style={styles.container}>
        <Text style={styles.question}>{question}</Text>
        <RenderHtml
          contentWidth={width}
          source={source}
          enableExperimentalMarginCollapsing={true}
          tagsStyles={{ styles: { fontSize: 24 } }}
        />
        <View style={styles.flex}>
          <Text style={{ color: "#503779" }}>
            Author: <Text style={styles.date}>Thorlani</Text>
          </Text>
          <Text style={{ color: "#503779" }}>
            Date: <Text style={styles.date}>{truncateDate(date, 10)}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 20,
  },
  question: {
    fontWeight: "800",
    fontSize: 24,
    color: "#392061",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    fontWeight: "800",
    color: "#220D45",
  },
});
