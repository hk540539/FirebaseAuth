import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./screens/MainScreen";
import LoadingScreen from "./screens/LoadingScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";

const MainNavigator = createStackNavigator(
  {
    Loading: { screen: LoadingScreen },
    Main: { screen: MainScreen },
    Signin: { screen: SigninScreen },
    Signup: { screen: SignupScreen }
  },
  {
    initialRouteName: "Loading",
    defaultNavigationOptions: {
      title: "Loading Page",
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#BA2F16"
      },
      headerTitleStyle: { color: "#FFF" }
    }
  }
);

var firebaseConfig = {
  apiKey: "AIzaSyDzgnP3-c_Gshu_dTf5T2PL4otiLjWd4J4",
  authDomain: "reactfirebaseapp-42cb6.firebaseapp.com",
  databaseURL: "https://reactfirebaseapp-42cb6.firebaseio.com",
  projectId: "reactfirebaseapp-42cb6",
  storageBucket: "reactfirebaseapp-42cb6.appspot.com",
  messagingSenderId: "1030136452106",
  appId: "1:1030136452106:web:8a8f6518cb4c4413d23bf3",
  measurementId: "G-N9CS7RDL9X"
};

firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const App = createAppContainer(MainNavigator);
export default App;
