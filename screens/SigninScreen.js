import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";

class SigninScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Open up SigninScreen.js to start working on your SigninScreen!
        </Text>
      </View>
    );
  }
}

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
