import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const NoItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        No Places Found, Please Add some of your Favourite Places.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontStyle: "italic",
    color: Colors.primary,
  },
});

export default NoItem;
