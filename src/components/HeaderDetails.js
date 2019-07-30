import React from "react";
import { Animated, TouchableOpacity, View, Text } from "react-native";
import { Icon } from "react-native-elements";

// onShare = async props => {
//   try {
//     const result = await Share.share({
//       message: "ieeenssce://blog"
//     });

//     if (result.action === Share.sharedAction) {
//       if (result.activityType) {
//         // shared with activity type of result.activityType
//       } else {
//         // shared
//       }
//     } else if (result.action === Share.dismissedAction) {
//       // dismissed
//     }
//   } catch (error) {
//     alert(error.message);
//   }
// };

const HeaderDetails = props => (
  <Animated.View
    style={{
      height: props.height,
      backgroundColor: "transparent",
      // borderColor: "#fff",
      borderBottomColor: "#EFEFEF",
      elevation: 2
      // borderWidth: 0,
      // borderBottomWidth: 2
    }}
  >
    <Animated.Image
      source={{ uri: props.imageurl }}
      style={{
        flex: 1,
        resizeMode: "cover",
        opacity: props.opacityImage,
        backgroundColor: "transparent"
      }}
    />
    <Animated.View
      style={{
        flex: 1,
        height: 60,
        position: "absolute",
        top: 0,
        left: 30,
        right: 30,
        bottom: 0,
        opacity: props.opacity,
        flexDirection: "row",
        backgroundColor: "transparent",
        justifyContent: "space-between",
        elevation: 2
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10
        }}
        activeOpacity={1}
      >
        <Text style={{ fontFamily: "MerriweatherSans", textAlign: "center" }}>
          {props.title}
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10
        }}
        onPress={() => onShare(props)}
        activeOpacity={1}
      >
        <Icon name="share" type="ionicons" color="black" size={22} />
      </TouchableOpacity> */}
    </Animated.View>
    <View
      style={{
        flex: 1,
        position: "absolute",
        top: 10,
        bottom: 10,
        zIndex: 100
      }}
    >
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        activeOpacity={1}
        style={{
          width: 50,
          alignContent: "flex-start",
          justifyContent: "center"
        }}
      >
        <Icon name="angle-left" type="font-awesome" color="#059AAE" size={30} />
      </TouchableOpacity>
    </View>
  </Animated.View>
);
export default HeaderDetails;

{
  /* <Icon name="angle-left" type="font-awesome" color="black" size={30} /> */
}
