import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Events extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Upcoming Events</Text>
        </View>
        <View />
      </View>
    );
  }
}
export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
