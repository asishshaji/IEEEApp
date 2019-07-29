import React, { Component } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import SocietyCardView from "./SocietyCardView";
import SocietyHeader from "./SocietyHeader";

import firebase from "react-native-firebase";
// import console = require("console");
// import console = require("console");

class EventBoard extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
    this.ref = firebase.firestore().collection("UpcomingEvents");
  }

  componentDidMount() {
    this.ref
      .doc(this.props.societyname)
      .collection("Events")
      .onSnapshot(querysnapshot => {
        this.setState({
          list: []
        });
        querysnapshot.forEach(doc => {
          this.setState({
            list: this.state.list.concat(doc.data())
          });
        });
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SocietyHeader
          image={this.props.societythumb}
          name={this.props.societyname}
        />

        <FlatList
          data={this.state.list}
          style={{
            flex: 1,
            backgroundColor: "white"
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            padding: 15
          }}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => <SocietyCardView data={item} />}
        />
      </View>
    );
  }
}
export default EventBoard;
