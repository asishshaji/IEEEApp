import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import SocietyEventBoard from "../components/SocietyEventBoard";

// Standard Avatar

class Events extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 70, marginTop: 10 }}>
          <Text
            style={{
              fontFamily: "MerriweatherSans-ExtraBold",
              fontSize: 26,
              padding: 10,
              marginLeft: 10
            }}
          >
            Upcoming {"\n"}Events
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <SocietyEventBoard
            societyname="CS | IEEE COMPUTER SOCIETY"
            societythumb="https://ieeecs-media.computer.org/wp-media/2018/04/02183615/IEEE-CS_LogoTM-orange-300x103.png"
          />
          <SocietyEventBoard
            societyname="PES | IEEE POWER & ENERGY SOCIETY"
            societythumb="https://www.ieee-pes.org/images/files/logos/IEEE-PES-Logo-Web-No-Background.png"
          />
        </ScrollView>

        <View />
      </View>
    );
  }
}
export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
