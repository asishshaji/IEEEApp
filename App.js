import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import NewsScreen from "./src/screens/News";
import NewsDetails from "./src/screens/NewsDetails";
import CreateBlog from "./src/screens/CreateBlog";
import EventScreen from "./src/screens/UpcomingEvents";
import ExComScreen from "./src/screens/ExComMembers";

import Icon from "react-native-vector-icons/FontAwesome5";

import React from "react";

const NewsTab = createStackNavigator(
  {
    News: {
      screen: NewsScreen
    },
    Details: {
      screen: NewsDetails
    },
    CreateBlog: {
      screen: CreateBlog
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
    initialRouteName: "Events"
  }
);

export default createAppContainer(AppNavigator);
