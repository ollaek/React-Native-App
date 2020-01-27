import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { setNavigator } from "./src/helpers/navigationRef";

import SignInScreen from "./src/screens/SignInScreen";
import RequestsScreen from "./src/screens/RequestsScreen";
import ReportsScreen from "./src/screens/ReportsScreen";
import BlankScreen from "./src/screens/BlankScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";

const switchNavigator = createSwitchNavigator({
  Blank: BlankScreen,
  SignIn: SignInScreen,
  AppFlow: createBottomTabNavigator({
    Requests: RequestsScreen,
    Reports: ReportsScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return(
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }}/>
    </AuthProvider>
  );
};
