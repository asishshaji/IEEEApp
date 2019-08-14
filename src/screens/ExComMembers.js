import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import UserCard from "../components/UserCard";
import firebase from "react-native-firebase";

class ExCom extends Component {
  constructor() {
    super();
    this.state = {
      ref: null,
      list: [],
      selectedSociety: "ExCom"
    };
    this.state.ref = firebase
      .firestore()
      .collection("Members")
      .doc(this.state.selectedSociety)
      .collection("Members");
  }

  componentDidMount() {
    this.state.ref.onSnapshot(querySnapshot => {
      this.setState({
        list: []
      });
      querySnapshot.forEach(doc => {
        this.setState({
          list: this.state.list.concat(doc.data())
        });
      });
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, backgroundColor: "#fff" }}
        >
          <Text
            style={{
              fontFamily: "MerriweatherSans-ExtraBold",
              fontSize: 26,
              padding: 10,
              marginLeft: 10,
              textAlign: "center",
              marginTop: 10,
              color: "#2E4490",
              backgroundColor: "#fff"
            }}
          >
            EXCOM 2K19
          </Text>

          <FlatList
            data={this.state.list}
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
              <UserCard
                name={item.Name}
                designation={item.Position}
                url={item.ImageUrl}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}
export default ExCom;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
