import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import NewsScreen from "./src/screens/News";
import NewsDetails from "./src/screens/NewsDetails";
import CreateBlog from "./src/screens/CreateBlog";
import EventScreen from "./src/screens/UpcomingEvents";
import Notification from "./src/screens/NotificationScreen";

import ExComScreen from "./src/screens/ExComMembers";
import firebase from "react-native-firebase";

import Icon from "react-native-vector-icons/FontAwesome5";

import React from "react";

firebase
  .auth()
  .signInAnonymously()
  .then(() => {
    console.log("Logged in");
  });

const channel = new firebase.notifications.Android.Channel(
  "notifications123",
  "Notifications",
  firebase.notifications.Android.Importance.Max
).setDescription("My apps test channel");

// Create the channel
firebase.notifications().android.createChannel(channel);

const NewsTab = createStackNavigator(
  {
    News: {
      screen: NewsScreen
    },
    Details: {
      screen: NewsDetails,
      path: "news/:title"
    },
    CreateBlog: {
      screen: CreateBlog
    },
    Notification: {
      screen: Notification
    }
  },
  {
    initialRouteName: "News"
  }
);

NewsTab.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

const AppNavigator = createBottomTabNavigator(
  {
    Events: {
      screen: EventScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="calendar-alt"
            size={16}
            color={tintColor}
            type="font-awesome"
          />
        )
      }
    },
    News: {
      screen: NewsTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="newspaper"
            size={16}
            color={tintColor}
            type="font-awesome"
          />
        )
      }
    },
    ExCom: {
      screen: ExComScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="users" size={16} color={tintColor} type="font-awesome" />
        )
      }
    }
  },
  {
    initialRouteName: "News"
  }
);

const App = createAppContainer(AppNavigator);

const prefix = "ieeenssce://";

const MainApp = () => <App uriPrefix={prefix} />;

export default MainApp;
