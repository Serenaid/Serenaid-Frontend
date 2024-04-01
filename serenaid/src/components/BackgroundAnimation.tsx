// src/components/BackgroundAnimation.tsx
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const nightSkyAnimation = require('../assets/animations/night_sky.json');

const BackgroundAnimation = () => {
  return <LottieView source={nightSkyAnimation} autoPlay loop style={styles.backgroundAnimation} />;
};

const styles = StyleSheet.create({
  backgroundAnimation: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
});

export default BackgroundAnimation;
// src/components/BackgroundAnimation.tsx