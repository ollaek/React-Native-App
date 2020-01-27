import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {Foundation } from "@expo/vector-icons";

const ReportsScreen = () => {
    return <Text style={{ fontSize: 48 , marginTop: 50}}>Reports Screen</Text>;
};

ReportsScreen.navigationOptions = {
    title: "Reports",
    tabBarIcon: <Foundation name="page-copy" size={25}/>
};

const styles = StyleSheet.create({});

export default ReportsScreen;