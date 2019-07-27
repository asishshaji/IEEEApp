import React from "react";
import { View, Image, StyleSheet, TextInput, Text } from "react-native";
import Search from "./Search";
import { Icon } from "react-native-elements";

const Header = props => (
  <View
    style={{
      height: 50,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      elevation:2,
      borderColor:'#FFFFFF',
      borderBottomColor:'#EBEBEB',
      borderWidth:1
    }}
  >
    <Image
      source={{ uri: "https://www.ieeesbnssce.org/images/logo2.png" }}
      style={{ flex: 1, resizeMode: "center", height: 40, width: "100%" }}
    />
    
  </View>
);
export default Header;
