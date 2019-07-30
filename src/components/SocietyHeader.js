import React from "react";
import { View, Text, Image } from "react-native";

const SocietyHeader = props => (
  <View
    style={{
      height: 70,
      flexDirection: "row",
      padding: 10,
      alignItems: "center",

      marginTop: 20,
      borderWidth: 1,
      borderColor: "#fff",
      borderBottomColor: "#f5f5f5",
      borderTopColor: "#f5f5f5",
      elevation: 1
    }}
  >
    <View
      style={{
        height: 60,
        width: 60,

        borderRadius: 30,
        marginLeft: 5,
        backgroundColor: "#F2F2F2",
        padding: 10
      }}
    >
      <Image
        style={{
          flex: 1,
          alignSelf: "center",
          height: 60,
          width: 60,
          resizeMode: "center",
          borderRadius: 30
        }}
        source={{
          uri: props.image,
          cache: "only-if-cached"
        }}
      />
    </View>
    <Text
      style={{
        flex: 1,
        fontFamily: "MerriweatherSans",
        textAlign: "left",
        padding: 10
      }}
    >
      {props.name}
    </Text>
  </View>
);
export default SocietyHeader;
