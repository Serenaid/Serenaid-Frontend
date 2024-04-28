import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; // Adjust the path to HomeScreen
import MusicPlayerScreen from '../screens/MusicPlayerScreen'; // Adjust the path to MusicPlayerScreen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Optional: hide the header on HomeScreen
      />
      <Stack.Screen
        name="MusicPlayerScreen"
        component={MusicPlayerScreen}
        options={{ title: 'Music Player' }} // Adjust the screen title
      />
    </Stack.Navigator>
  );
};

export default AppNavigator; // Export the stack navigator
