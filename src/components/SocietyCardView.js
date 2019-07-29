import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import LinearGradient from "react-native-linear-gradient";

const SocietyCard = props => {
  console.log("props.data");
  return (
    <LinearGradient
      colors={["#ED4264", "#F3607D", "#ED4264"]}
      style={{
        height: 180,
        width: 140,
        backgroundColor: "red",
        margin: 5,
        borderRadius: 20,
        elevation: 2,
        // flex: 1,
        justifyContent: "space-between"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          marginTop: 5,
          justifyContent: "center"
        }}
      >
        <Icon
          name="clock-o"
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
            textTransform: "uppercase",
            fontWeight: "700"
          }}
        >
          {props.data.Date}
        </Text>
      </View>
      <View style={{ padding: 5, marginTop: 5 }}>
        <TouchableOpacity onPress={()=>alert("Clicked")} activeOpacity={1}>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              textAlign: "center",
              fontFamily: "MerriweatherSans",
              textTransform: "uppercase"
            }}
          >
            {props.data.Title}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 5,
          marginTop: 5,
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Icon
          name="map-marker"
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
            textTransform: "uppercase",
            fontWeight: "700"
          }}
        >
          {props.data.Venue}
        </Text>
      </View>
      {/* 
        Use this if the event is expired
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 1,
          flex: 1,
          backgroundColor: "red",
          height: 180,
          width: 140,
          opacity:0.7
        }}
      /> */}
    </LinearGradient>
  );
};
export default SocietyCard;
