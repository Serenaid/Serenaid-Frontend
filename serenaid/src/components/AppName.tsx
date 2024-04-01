// src/components/AppName.tsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppName = () => {
  return <Text style={styles.appName}>Serenaid</Text>;
};

const styles = StyleSheet.create({
  appName: {
    marginTop: 10, // Space between logo and app name
    fontSize: 24,
    color: '#FFFFFF', // Consider a color that stands out against your background
  },
});

export default AppName;
// src/components/AppName.tsx