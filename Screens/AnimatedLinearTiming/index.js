import React, { PureComponent } from "react";
import { View, Text, Animated, Easing } from "react-native";
import { style } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export class AnimatedLinearTiming extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => this.animate());
  }

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    });
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    });
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    });
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["0deg", "180deg", "0deg"]
    });

    return (
      <View style={style.mainView}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Animated.View
            style={{
              marginLeft,
              height: 40,
              width: 40,
              backgroundColor: "red"
            }}
          />
          <Animated.View
            style={{
              opacity,
              marginTop: 10,
              height: 40,
              width: 40,
              backgroundColor: "blue"
            }}
          />
          <Animated.View
            style={{
              marginLeft: movingMargin,
              marginTop: 10,
              height: 40,
              width: 40,
              backgroundColor: "yellow"
            }}
          />
          <Animated.Text
            style={{ fontSize: textSize, color: "green", marginTop: 10 }}
          >
            Animated Text
          </Animated.Text>
          <Animated.View
            style={{
              transform: [{ rotateX }],
              width: 40,
              height: 40,
              backgroundColor: "pink"
            }}
          />
        </View>
        <TouchableOpacity
          style={{ height: 40, alignSelf: "center" }}
          onPress={() => this.props.navigation.navigate("AnimatedSpringScreen")}
        >
          <Text>Press</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
