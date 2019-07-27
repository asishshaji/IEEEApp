import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Animated,
  FlatList
} from "react-native";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";

import firebase from "react-native-firebase";

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 100;

class News extends Component {
  static navigationOptions = {
    header: <Header />
  };

  constructor() {
    super();
    this.state = {
      scrollY: new Animated.Value(0),
      list: []
    };
    this.ref = firebase.firestore().collection("Blogs");
  }

  componentDidMount() {
    this.ref.onSnapshot(querySnapshot => {
      // add an efficient method
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
      <SafeAreaView style={styles.container}>
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
            <NewsCard data={item} navigation={this.props.navigation} />
          )}
        />
      </SafeAreaView>
    );
  }
}
export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  }
});
