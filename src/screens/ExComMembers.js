import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import UserCard from "../components/UserCard";

class ExCom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        >
          <Text
            style={{
              fontFamily: "MerriweatherSans-ExtraBold",
              fontSize: 26,
              padding: 10,
              marginLeft: 10,
              textAlign: "center",
              marginTop: 10,
              color: "#2E4490"
            }}
          >
            EXCOM 2K19
          </Text>
          <UserCard
            name="ABHINAV R"
            designation="Chairman"
            url="https://www.ieeesbnssce.org/images/team/2.jpg"
          />
          <UserCard
            name="ABHIRAJ V S"
            designation="Vice Chairman"
            url="https://www.ieeesbnssce.org/images/team/26.jpg"
          />
          <UserCard
            name="ATHIRA M"
            designation="Secretary"
            url="https://www.ieeesbnssce.org/images/team/14.jpg"
          />
          <UserCard
            name="ANJU MARIYA"
            designation="Link Representative"
            url="https://www.ieeesbnssce.org/images/team/34.jpg"
          />
        </ScrollView>
      </View>
    );
  }
}
export default ExCom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
