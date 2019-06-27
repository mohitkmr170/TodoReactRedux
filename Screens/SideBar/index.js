import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { style } from "./styles";

export class SideBar extends Component {
  render() {
    return (
      <View style={style.mainView} showsVerticalScrollIndicator={true}>
        <Text>Side Bar</Text>
      </View>
    );
  }
}
