import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up MainScreen.js to start working on your MainScreen!</Text>
      </View>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
