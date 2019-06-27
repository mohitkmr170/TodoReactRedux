import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
  Modal
} from "react-native";
import { style } from "./styles";
import {
  FlatList,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";

const screenArray = [
  "ImageCircularTransformationScreen",
  "AnimatedLinearTimingScreen",
  "AnimatedSpringScreen",
  "AnimatedSequenceScreen",
  "AnimatedStaggerScreen",
  "TodoScreen",
  "UnderstandingAPIScreen"
];

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  openModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  navigate = index => {
    this.setState({ modalVisible: false });
    this.props.navigation.navigate(screenArray[--index]);
  };

  renderModalItem = (item, index) => {
    let newItem = item.replace("Screen", "");
    return (
      <TouchableOpacity onPress={() => this.navigate(index)}>
        <Text style={{ fontSize: 20, color: "#fff" }}>
          {++index + "."} {newItem}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { modalVisible } = this.state;
    console.log("In Home", this.props);
    return (
      <View style={style.mainView}>
        <Modal
          visible={modalVisible}
          transparent={false}
          animationType="slide"
          animated={true}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              marginTop: 160,
              padding: 10
            }}
          >
            <Text
              onPress={() => this.closeModal()}
              style={{
                color: "red",
                alignSelf: "flex-end",
                fontSize: 20,
                marginBottom: 10
              }}
            >
              X
            </Text>
            <View
              style={{
                flex: 1,
                borderTopColor: "#fff",
                borderTopWidth: 1,
                paddingTop: 10
              }}
            >
              <FlatList
                data={screenArray}
                extraData={this.state}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) =>
                  this.renderModalItem(item, index)
                }
              />
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() =>
            // this.props.navigation.navigate("ImageCircularTransformationScreen")
            this.openModal()
          }
          style={{
            height: 100,
            borderRadius: 10,
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Press</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
