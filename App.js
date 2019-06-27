import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppStackFlow from "./Navigation/AppFlow";

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <AppStackFlow />;
  }
}
