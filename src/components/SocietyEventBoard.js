import React, { Component } from "react";
import { View, Text, FlatList, Modal, TouchableHighlight } from "react-native";
import SocietyCardView from "./SocietyCardView";
import SocietyHeader from "./SocietyHeader";
import ModalView from "../components/ModalView";

import firebase from "react-native-firebase";
// import console = require("console");
// import console = require("console");

class EventBoard extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      clickedItem: null,
      modalVisible: false
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
          renderItem={({ item }) => (
            <SocietyCardView
              data={item}
              onPress={() => {
                this.setState({
                  clickedItem: item,
                  modalVisible: true
                });
              }}
            />
          )}
        />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({
                modalVisible: !this.state.modalVisible
              });
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  height: "80%",
                  width: "90%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  elevation: 2
                }}
              >
                <ModalView data={this.state.clickedItem} />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
export default EventBoard;
