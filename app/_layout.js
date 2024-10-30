import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Stack from "expo-router"

export default class _layout extends Component {
  render() {
    return (
      <Stack screenOptions={
        {headerStyle: {backgroundColor: "coral"}, 
        headerTintColor: "",
        headerTitleStyle: {fontweight: "bold"}
        }}>
        <Stack.Screen name = "index" options={{ headerTitle: "Home"}}/>
        <Stack.Screen name = "settingPage" options={{ headerTitle: "Settings"}}/>
        <Stack.Screen name = "settingProfile" options={{ headerTitle: "My Profile"}}/>
      </Stack>
    )
  }
}
