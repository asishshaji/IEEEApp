import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const NewsCard = props => (
  <TouchableOpacity
    style={styles.container}
    activeOpacity={1}
    onPress={props.onpress}
  >
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: props.data.ImageUrl }}
        style={{ flex: 1, borderRadius: 10 }}
      />
    </View>

    <View
      style={{
        position: "absolute",
        bottom: -10,
        backgroundColor: "#FFFFFF",
        right: 10,
        left: 10,
        borderRadius: 10,
        padding: 10,
        elevation: 1
      }}
    >
      <Text
        style={{
          marginLeft: 5,
          fontSize: 14,
          fontWeight: "500",
          color: "#474747",
          flex: 1,
          fontFamily: "RobotoSlab-Regular",
          textAlign: "left"
        }}
      >
        {props.data.Title}
      </Text>
      <View
        style={{
          flex: 1,
          marginLeft: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "#059AAE",
            fontFamily: "RobotoSlab-Regular",
            fontWeight: "400",
            fontSize: 12
          }}
        >
          {props.data.Tag}
        </Text>
        <Text
          style={{
            color: "#059AAE",
            fontFamily: "RobotoSlab-Regular",
            fontWeight: "400",
            fontSize: 12
          }}
        >
          {props.data.Date}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
export default NewsCard;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#f5f5f5",
    marginTop: 20,
    borderRadius: 10,
    elevation: 1
  }
});


