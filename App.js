import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Search from 'components/Search';
import Dashboard from 'components/Dashboard';
import ProfileDetails from 'components/ProfileDetails';
import Repositories from 'components/Repositories';
import WebView from 'components/WebView';
import Notes from 'components/Notes';

const Stack = createStackNavigator();

function GitStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SEARCH" component={Search} options={{title:'Search'}} />
      <Stack.Screen name="DASHBOARD" component={Dashboard} options={{ title: 'Dashboard' }} />
      <Stack.Screen name="PROFILE" component={ProfileDetails} options={{ title: 'Profile Details' }} />
      <Stack.Screen name="REPOSITORIES" component={Repositories} options={{ title: 'Repositories' }} />
      <Stack.Screen name="WEBVIEW" component={WebView} options={{ title: 'WebView' }} />
      <Stack.Screen name="NOTES" component={Notes} options={{ title: 'Notes' }} />
    </Stack.Navigator >
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <GitStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
