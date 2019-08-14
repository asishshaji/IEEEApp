import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

const ModalView = props => (
  <View style={{ flex: 1, borderRadius: 10 }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      overScrollMode="never"
      containerStyle={styles.container}
      style={{ flex: 1, borderRadius: 10, backgroundColor: "#fff" }}
    >
      <View style={{ flex: 1, borderRadius: 10 }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "black",
            zIndex: 10000,
            opacity: 0.4,
            borderRadius: 10
          }}
        />
        <Image
          source={{ uri: props.data.ImageUrl }}
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "cover",
            borderRadius: 10,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,

            minHeight: 200
          }}
        />

        <View
          style={{
            position: "absolute",
            left: 20,
            right: 20,
            bottom: 10,
            top: 10,
            zIndex: 1000000,
            justifyContent: "center"
          }}
        >
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Text
              style={{
                //   flex: 1,
                fontFamily: "MerriweatherSans",
                textAlign: "left",
                padding: 10,
                fontSize: 24,
                textAlign: "center",
                color: "#fff"
              }}
            >
              {props.data.Title}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end"
            }}
          >
            <View
              style={{
                padding: 10,
                marginTop: 5,
                flex: 0,
                flexDirection: "row",
                justifyContent: "flex-start"
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
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                padding: 10,
                marginTop: 5,
                justifyContent: "flex-end"
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
          </View>
        </View>
      </View>

      <View style={{ flex: 1, padding: 5 }}>
        <Text
          style={{
            fontFamily: "RobotoSlab-Regular",
            fontSize: 14,
            color: "#5E5E5E",
            marginBottom: 5,
            padding: 5,
            textAlign: "auto"
          }}
        >
          {props.data.Content}
        </Text>
      </View>
    </ScrollView>
  </View>
);
export default ModalView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10
  }
});
