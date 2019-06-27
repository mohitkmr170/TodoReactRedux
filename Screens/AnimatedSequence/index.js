import React, { Component } from "react";
import { Animated, Easing, View, Text, AppRegistry } from "react-native";
import { style } from "./styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

const arr = [];
for (let i = 0; i < 500; i++) {
  arr.push(i);
}

export class AnimatedSequence extends React.Component {
  constructor() {
    super();
    this.animatedValue = [];
    arr.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0);
    });
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const animations = arr.map(item => {
      return Animated.timing(this.animatedValue[item], {
        toValue: 1,
        duration: 50
      });
    });
    Animated.sequence(animations).start();
  }

  render() {
    const animations = arr.map((item, index) => {
      return (
        <Animated.View
          key={index}
          style={{
            opacity: this.animatedValue[item],
            height: 20,
            width: 20,
            backgroundColor: "red",
            marginLeft: 3,
            marginTop: 3
          }}
        />
      );
    });
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={style.mainView}>{animations}</View>
        </ScrollView>
        <TouchableOpacity
          style={{ height: 40 }}
          onPress={() =>
            this.props.navigation.navigate("AnimatedStaggerScreen")
          }
        >
          <Text style={{ alignSelf: "center" }}>Press</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
