import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../common";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>About Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  titleStyle: {
    fontSize: 20,
    color: COLORS.white,
  },
});