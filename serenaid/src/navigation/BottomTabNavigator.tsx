import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { IconMusic } from '../assets/iconfont';
import IconHome from '../assets/images/IconHome';
import HomeScreen from '../screens/HomeScreen';
import MusicPlayerScreen from '../screens/MusicPlayerScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon(props) {
            return <IconHome />;
          },
        }}
      />
      <Tab.Screen
        name="MusicPlayer"
        component={MusicPlayerScreen}
        options={{
          tabBarLabel: 'Music Player',
          tabBarIcon(props) {
            return <IconMusic />;
          },
        }}
      />
      {/* <Tab.Screen
        name="AudioList"
        component={AudioListScreen}
        options={{ tabBarLabel: 'Audio List' }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
