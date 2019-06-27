import React, { Component } from "react";
import { View, Text, Animated, Image, Easing } from "react-native";
import { style } from "./styles";
import exampleImage from "../../Assets/Images/exampleImage.jpeg";
import { TouchableOpacity } from "react-native-gesture-handler";

export class ImageCircularTransformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View style={style.mainView}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Animated.Image
            style={[style.imageStyele, { transform: [{ rotate: spin }] }]}
            source={exampleImage}
          />
        </View>
        <TouchableOpacity
          style={{ height: 60 }}
          onPress={() =>
            this.props.navigation.navigate("AnimatedLinearTimingScreen")
          }
        >
          <Text>Press</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
