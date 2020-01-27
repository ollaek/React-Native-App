import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import {Foundation } from "@expo/vector-icons";

const RequestsScreen = ({navigation}) => {
  return (
    <>
      <Text style={{ fontSize: 48 , marginTop: 50}}>Requests Screen</Text>
      <Button title="Sign Out" onPress={() => navigation.navigate("SignIn")} />
    </>
  );
};

RequestsScreen.navigationOptions = {
    title: "Requests",
    tabBarIcon: <Foundation name="page-add" size={25}/>
};

const styles = StyleSheet.create({});

export default RequestsScreen;
