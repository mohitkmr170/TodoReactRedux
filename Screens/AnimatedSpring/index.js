import React, { Component } from "react";
import { View, Animated, Easing, Text } from "react-native";
import { style } from "./styles";
import exampleImage from "../../Assets/Images/exampleImage.jpeg";
import { TouchableOpacity } from "react-native-gesture-handler";

export class AnimatedSpring extends React.Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.3);
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, { toValue: 1, friction: 1 }).start();
  }

  render() {
    return (
      <View style={style.mainView}>
        <View style={{ flex: 1 }}>
          <Text
            style={{ marginTop: 20, marginBottom: 20, alignSelf: "center" }}
            onPress={this.spring.bind(this)}
          >
            Animated Spring
          </Text>
          <Animated.Image
            source={exampleImage}
            style={{
              height: 200,
              width: 200,
              transform: [{ scale: this.springValue }]
            }}
          />
        </View>
        <TouchableOpacity
          style={{ height: 40 }}
          onPress={() =>
            this.props.navigation.navigate("AnimatedSequenceScreen")
          }
        >
          <Text>Press</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
