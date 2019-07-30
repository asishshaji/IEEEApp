import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const UserCard = props => (
  <View style={styles.container}>
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View
        style={{
          alignSelf: "center",
          height: 150,
          width: "50%",
          borderRadius: 20
        }}
      />
      <Image
        style={{
          alignSelf: "center",
          height: 180,
          width: "50%",
          borderRadius: 20,
          position: "absolute",
          left: 0
        }}
        source={{
          uri: props.url,
          cache: "only-if-cached"
        }}
      />
      <View
        style={{
          flex: 1,
          padding: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontFamily: "MerriweatherSans",
            fontSize: 16
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            fontFamily: "MerriweatherSans",
            fontSize: 14
          }}
        >
          {props.designation}
        </Text>
      </View>
    </View>
  </View>
);
export default UserCard;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    elevation: 2
  }
});
