import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import { style } from "./styles";
import { FlatList } from "react-native-gesture-handler";

export class UnderstandingAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dataSource: []
    };
  }

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(response => response.json())
      .then(responseJSON => {
        console.log("Response of API", typeof responseJSON, responseJSON);
        this.setState({ dataSource: responseJSON, loading: false });
      })
      .catch(error => console.log(error));
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      />
    );
  };

  renderItem = data => (
    <TouchableOpacity style={style.list}>
      <Text style={style.lightText}>{data.item.employee_name}</Text>
      <Text style={style.lightText}>{data.item.employee_age}</Text>
      <Text style={style.lightText}>{data.item.employee_salary}</Text>
    </TouchableOpacity>
  );

  headerRender() {
    return (
      <View
        style={{
          borderBottomColor: "gray",
          borderBottomWidth: 2,
          paddingVertical: 10,
          backgroundColor: "gray"
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            alignSelf: "center"
          }}
        >
          API Response
        </Text>
      </View>
    );
  }

  render() {
    console.log("Response of API", this.state.dataSource);
    if (this.state.loading) {
      return (
        <View style={style.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    } else
      return (
        <View style={style.mainView}>
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.flatListItemSeperator}
            renderItem={item => this.renderItem(item)}
            keyExtractor={item => item.id.toString()}
            ListHeaderComponent={() => this.headerRender()}
            stickyHeaderIndices={[0]}
          />
        </View>
      );
  }
}
