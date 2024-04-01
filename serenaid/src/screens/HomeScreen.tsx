// HomeScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BackgroundAnimation from '../components/BackgroundAnimation';
import SwayLogo from '../components/SwayLogo';
import AppName from '../components/AppName';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BackgroundAnimation />
      {/* The rest of your content */}
      <View style={styles.overlayContent}>
        <SwayLogo />
        <AppName />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000', 
    position: 'relative',
  },
  overlayContent: {
    marginTop: 40, 
    alignItems: 'center',
    width: '100%', 
    position: 'absolute',
    top: 0,
  },
});

export default HomeScreen;
