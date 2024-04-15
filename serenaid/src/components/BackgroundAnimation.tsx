import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, Dimensions } from 'react-native';

const BackgroundAnimation = () => {
  return (
    <LottieView
      source={require('../assets/animations/night_sky.json')}
      autoPlay
      loop
      style={styles.fullscreen}
      resizeMode="cover"  // This should scale the animation properly
    />
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute'
  },
});

export default BackgroundAnimation;
