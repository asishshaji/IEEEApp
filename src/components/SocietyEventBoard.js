import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SocietyCardView from "./SocietyCardView";
import SocietyHeader from "./SocietyHeader";

// Fetch from database here

const EventBoard = props => (
  <View style={{ flex: 1 }}>
    <SocietyHeader image={props.societythumb} name={props.societyname} />
    <ScrollView
      horizontal={true}
      contentContainerStyle={{ padding: 10 }}
      showsHorizontalScrollIndicator={false}
      style={{}}
    >
      <SocietyCardView />
      <SocietyCardView />
      <SocietyCardView />
      <SocietyCardView />
    </ScrollView>
  </View>
);
export default EventBoard;
