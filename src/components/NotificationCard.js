import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const NotificationCard = props => (
  <View style={styles.container}>
    <Image
      source={{
        uri: props.data.ImageUrl
          ? props.data.ImageUrl
          : "https://avatars2.githubusercontent.com/u/6964556?s=400&v=4"
      }}
      style={{ height: "90%", width: 100, borderRadius: 10 }}
      resizeMode="cover"
    />
    <View
      style={{
        flex: 1,
        padding: 10,
        paddingBottom: 0,
        marginLeft: 10,
        // backgroundColor: "red",
        alignSelf: "stretch"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 5,
          flex: 0,
          flexWrap: "wrap"
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{props.data.Title}</Text>
        <Text>20/12/1998</Text>
      </View>
      <Text
        style={{ flex: 1, flexWrap: "wrap" }}
        ellipsizeMode="tail"
        numberOfLines={5}
      >
        {props.data.Body}
      </Text>
    </View>
  </View>
);
export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "95%",
    backgroundColor: "#fcfcfc",
    marginTop: 15,
    elevation: 2,
    borderRadius: 10,
    padding: 5,
    flexDirection: "row",
    alignItems: "center"
  }
});
