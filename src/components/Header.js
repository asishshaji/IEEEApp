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
      elevation: 2,
      borderColor: "#FFFFFF",
      borderBottomColor: "#EBEBEB",
      borderWidth: 1,
      flexDirection: "row"
    }}
  >
    <Image
      source={require("../../assets/logo.png")}
      style={{ flex: 1, resizeMode: "center", height: 40, width: "100%" }}
    />
    <Icon
      type="ionicons"
      size={24}
      name="notifications"
      containerStyle={{ padding: 5 }}
      iconStyle={{ color: "#676767" }}
      onPress={()=>props.navigation.navigate('Notification')}
    />
  </View>
);
export default Header;
