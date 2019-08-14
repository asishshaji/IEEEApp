import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  Linking,
  StyleSheet,
  ScrollView,
  Animated,
  FlatList
} from "react-native";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";
import firebase, { Notification, RemoteMessage } from "react-native-firebase";

class News extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      scrollY: new Animated.Value(0),
      list: []
    };

    firebase
      .messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          firebase
            .firestore()
            .collection("FCMTOKENS")
            .doc(fcmToken)
            .set({
              token: fcmToken
            });
        } else {
          // user doesn't have a device token yet
        }
      });

    this.ref = firebase.firestore().collection("Blogs");
  }

  async componentDidMount() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      console.log("Has permission for notification");
    } else {
      try {
        await firebase.messaging().requestPermission();
        console.log("Granted permission");
      } catch (error) {
        console.log("Error getting permisson" + error);
      }
    }

    // messages are invoked when the app is in background or closed
    this.messageListener = firebase
      .messaging()
      .onMessage((message: RemoteMessage) => {
        // Process your message as required
      });

    this.removeNotificationListener = firebase
      .notifications()
      .onNotification((notification: Notification) => {
        // Process your notification as required
        console.log(notification);
        const localnotification = new firebase.notifications.Notification()
          .setNotificationId(notification._notificationId)
          .setTitle(notification._title)
          .setBody(notification._body)
          .android.setChannelId("notifications123");
        firebase.notifications().displayNotification(localnotification);
      });

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
  componentWillUnmount() {
    // this.unsubscribe();
    this.messageListener();
    this.removeNotificationListener();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={this.props.navigation} />
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
            <NewsCard
              data={item}
              navigation={this.props.navigation}
              onpress={() =>
                this.props.navigation.navigate("Details", {
                  data: item
                })
              }
            />
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
    backgroundColor: "#fff"
  }
});
