import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Animated } from "react-native";
import Header from "../components/HeaderDetails";
import { Icon } from "react-native-elements";

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;

class NewsDetails extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  render() {
    const cont_props = this.props.navigation.getParam("data", {
      Content: "You fucked up"
    });
    console.log(this.props.navigation.getParam("title"));

    const { navigation } = this.props;

    // console.log(cont_props);

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: "clamp"
    });

    const opacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });
    const opacityImage = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.container}>
        <Header
          imageurl={cont_props.ImageUrl}
          height={headerHeight}
          opacity={opacity}
          opacityImage={opacityImage}
          navigation={navigation}
        />
        <View style={{ flex: 1 }}>
          <ScrollView
            style={{
              flex: 1,
             
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
             
            }}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    y: this.state.scrollY
                  }
                }
              }
            ])}
          >
            <View style={{ flex: 1, padding: 20 }}>
              <Text
                style={{
                  fontFamily: "RobotoSlab-Regular",
                  fontSize: 18,
                  marginBottom: 5
                }}
              >
                {cont_props.Title}
              </Text>
              <Text
                style={{
                  fontFamily: "RobotoSlab-Regular",
                  fontSize: 14,
                  color: "#7F7F7F",
                  marginBottom: 5
                }}
              >
                {cont_props.Date}
              </Text>
              <Text
                style={{
                  fontFamily: "RobotoSlab-Regular",
                  fontSize: 16,
                  color: "#5E5E5E",
                  marginBottom: 5
                }}
              >
                {cont_props.Content}
              </Text>
            </View>
          </ScrollView>
        </View>
        {/* <View
          style={{
            position: "absolute",
            bottom: 40,
            flex: 1,
            right: 20
          }}
        >
          <Icon
            name="thumbs-up"
            type="font-awesome"
            color="#4A90E9"
            size={32}
          />
        </View> */}
      </View>
    );
  }
}
export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
