import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/HomeScreen';
import AddEntryScreen from './screens/AddEntryScreen';
import ListScreen from './screens/ListScreen';



const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  AddEntry: {
    screen: AddEntryScreen
  },
  List: {
    screen: ListScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
