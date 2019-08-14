import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import SocietyEventBoard from "../components/SocietyEventBoard";
import firebase from "react-native-firebase";
// Standard Avatar

class Events extends Component {
  constructor() {
    super();
    this.state = {
      ref: null,
      societyList: []
    };
    this.state.ref = firebase.firestore().collection("Society");
  }
  componentDidMount() {
    this.state.ref.onSnapshot(querySnapshot => {
      this.setState({
        societyList: []
      });
      querySnapshot.forEach(doc => {
        this.setState({
          societyList: this.state.societyList.concat(doc.data())
        });
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
          <FlatList
            data={this.state.societyList}
            style={{
              flex: 1,
              backgroundColor: "white"
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              padding: 15
            }}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <SocietyEventBoard
                societyname={item.Name}
                societythumb={item.Imageurl}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}
export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
