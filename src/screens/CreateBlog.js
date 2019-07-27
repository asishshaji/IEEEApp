import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class CreateBlog extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CreateBlog</Text>
      </View>
    );
  }
}
export default CreateBlog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
