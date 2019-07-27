import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const SocietyCard = props => (
  <View
    style={{
      height: 180,
      width: 140,
      backgroundColor: "red",
      margin: 5,
      borderRadius: 20,
      elevation: 2
    }}
  >
    <View style={{ flexDirection: "row", padding: 10, marginTop: 5 }}>
      <Icon
        name="clock-o"
        type="font-awesome"
        color="#fff"
        size={16}
        containerStyle={{ marginLeft: 5 }}
      />
      <Text style={{ marginLeft: 10, color: "#fff", textAlign: "center" }}>
        3:30pm
      </Text>
    </View>
    <View style={{ padding: 5, marginTop: 5 }}>
      <Text
        style={{
          color: "#fff",
          fontSize: 14,
          textAlign: "center",
          fontFamily: "MerriweatherSans"
        }}
      >
        Encrypta Coding Competition
      </Text>
    </View>
    <View style={{ padding: 5, marginTop: 5, flexDirection: "row" }}>
      <Icon
        name="map-marker"
        type="font-awesome"
        color="#fff"
        size={16}
        containerStyle={{ marginLeft: 5 }}
      />
      <Text style={{ marginLeft: 10, color: "#fff", textAlign: "center" }}>
        DLH HALL
      </Text>
    </View>
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 1,
        flex: 1
      }}
    >
      <View
        style={{
          padding: 5,
          marginTop: 5,
          flexDirection: "row",
          backgroundColor: "#7C3E71",
          height: 40,
          flex: 1,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Icon
          name="info"
          type="font-awesome"
          color="#fff"
          size={16}
          containerStyle={{ marginLeft: 5 }}
        />
        <Text
          style={{
            marginLeft: 10,
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold"
          }}
        >
          More info
        </Text>
      </View>
    </View>
  </View>
);
export default SocietyCard;
