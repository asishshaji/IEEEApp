import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ExCom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ExCom</Text>
      </View>
    );
  }
}
export default ExCom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
