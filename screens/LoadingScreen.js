import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Open up LoadingScreen.js to start working on your LoadingScreen!
        </Text>
      </View>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
