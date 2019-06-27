import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Alert
} from "react-native";
import Toast, { DURATION } from "react-native-easy-toast";
import { style } from "./styles";
import DeleteIcon from "react-native-vector-icons/AntDesign";
import CheckBox from "react-native-vector-icons/FontAwesome";
import AddIcon from "react-native-vector-icons/Ionicons";

const hitSlop = { left: 10, right: 10, top: 10, bottom: 10 };

export class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      errorState: false,
      todoItemText: "",
      listItem: []
    };
  }

  changeStatus = index => {
    const { listItem } = this.state;
    const tempArray = listItem;
    tempArray[index].status = !tempArray[index].status;
    this.setState({ listItem: tempArray });
  };

  deleteListItem = index => {
    const { listItem } = this.state;
    const tempArray = listItem;
    tempArray.splice(index, 1);
    this.setState({ listItem: tempArray });
  };

  deletePressed = index => {
    Alert.alert("Todo Still Not Completed", "Would you still wan't to delete", [
      { text: "No", onPress: () => console.log("Cancel Pressed!") },
      { text: "Yes", onPress: () => this.deleteListItem(index) }
    ]);
  };

  addTodoList = text => {
    console.log("Todo text", text);
    let tempArray = this.state.listItem;
    let newTodoObj = {
      data: text,
      status: false
    };
    tempArray.push(newTodoObj);
    this.setState({
      listItem: tempArray,
      todoItemText: "",
      errorState: false
    });
    this.textInput.clear();
  };

  renderItem = (item, index) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 4
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <TouchableOpacity
              hitSlop={hitSlop}
              onPress={() => this.changeStatus(index)}
            >
              <CheckBox
                name="check-square-o"
                size={22}
                color={item.status ? "green" : "black"}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <Text
            style={{
              color: "#424143",
              paddingLeft: 6,
              fontSize: 18,
              opacity: item.status ? 0.2 : 1,
              textDecorationLine: item.status ? "line-through" : "none"
            }}
          >
            {item.data}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            hitSlop={hitSlop}
            onPress={() => {
              item.status
                ? this.deleteListItem(index)
                : this.deletePressed(index);
            }}
          >
            <DeleteIcon name="delete" size={22} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const { todoItemText, errorState } = this.state;
    console.log("current render state", this.state.listItem);
    return (
      <View style={style.mainView}>
        <View
          style={[
            style.addSearchTodo,
            !todoItemText.length && errorState && style.errorTodoEntry
          ]}
        >
          <View style={{ justifyContent: "center" }}>
            <TextInput
              style={{ fontSize: 20 }}
              placeholder="Add a todo or Search"
              autoCapitalize={false}
              autoCorrect={false}
              onChangeText={text => {
                this.setState({ todoItemText: text });
              }}
              ref={input => {
                this.textInput = input;
              }}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                if (todoItemText.length) this.addTodoList(todoItemText);
                else {
                  this.refs.toast.show("Please Enter Something!");
                  this.setState({ errorState: true });
                }
              }}
              hitSlop={hitSlop}
            >
              <AddIcon name="md-add" size={22} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {errorState && !todoItemText.length && (
          <Text style={{ color: "#F96565", paddingTop: 5 }}>
            Todo Item Can't Be Left Blank
          </Text>
        )}
        <View style={style.todoList}>
          {this.state.listItem.length ? (
            <FlatList
              data={this.state.listItem}
              renderItem={({ item, index }) => this.renderItem(item, index)}
              extraData={this.state}
            />
          ) : (
            <Text style={{ alignSelf: "center", color: "gray", fontSize: 20 }}>
              No Todo List found
            </Text>
          )}
        </View>
        <Toast ref="toast" style={{ backgroundColor: "#F96565" }} />
      </View>
    );
  }
}
