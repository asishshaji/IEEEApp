import React from "react";
import { Animated, TouchableOpacity, View, Share } from "react-native";
import { Icon } from "react-native-elements";

onShare = async props => {
  try {
    const result = await Share.share({
      message: "ieeenssce://blog"
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const HeaderDetails = props => (
  <Animated.View
    style={{
      height: props.height
    }}
  >
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
        flexDirection: "row",
        backgroundColor: "transparent",
        justifyContent: "space-between"
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10
        }}
        onPress={() => props.navigation.goBack()}
        activeOpacity={1}
      >
        <Icon name="angle-left" type="font-awesome" color="black" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10
        }}
        onPress={() => onShare(props)}
        activeOpacity={1}
      >
        <Icon name="share" type="ionicons" color="black" size={22} />
      </TouchableOpacity>
    </View>
  </Animated.View>
);
export default HeaderDetails;
