import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MusicPlayerScreen from './screens/MusicPlayerScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons
import colors from './styles/colors'; // Import your color constants

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Music Player') {
              iconName = focused ? 'musical-notes' : 'musical-notes-outline';
            }

            // Adjust icon color based on focus state
            iconColor = focused ? colors.primary : colors.secondary;

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
          tabBarActiveTintColor: colors.primary, // Use primary color for active tab
          tabBarInactiveTintColor: colors.secondary, // Use secondary color for inactive tab
          tabBarStyle: { display: 'flex', backgroundColor: colors.background }, // Use background color for tab bar
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Music Player" component={MusicPlayerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
