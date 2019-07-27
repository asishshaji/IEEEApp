import React from "react";
import { Animated, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "react-native-elements";
const HeaderDetails = props => (
  <Animated.View style={{ height: props.height }}>
    <Animated.Image
      source={{ uri: props.imageurl }}
      style={{ flex: 1, resizeMode: "cover", opacity: props.opacityImage }}
    />
    <View
      style={{
        flex: 1,
        height: 60,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "transparent"
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          padding: 10
        }}
        onPress={() => props.navigation.goBack()}
        activeOpacity={1}
      >
        <Icon name="angle-left" type="font-awesome" color="black" size={30} />
      </TouchableOpacity>
    </View>
  </Animated.View>
);
export default HeaderDetails;
