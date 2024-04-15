import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Image, Easing } from 'react-native';

const logo = require('../assets/images/serenaid.png'); 

const SwayLogo = () => {
    const swayAnim = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      const animation = Animated.loop(
        Animated.sequence([
            Animated.timing(swayAnim, {
                toValue: 1.0,
                duration: 2000,
                easing: Easing.inOut(Easing.sin), 
                useNativeDriver: true,
            }),
            Animated.timing(swayAnim, {
                toValue: -1.0,
                duration: 2000, 
                easing: Easing.inOut(Easing.sin), 
                useNativeDriver: true,
            }),
            Animated.timing(swayAnim, {
                toValue: 0.0,
                duration: 2000, 
                easing: Easing.inOut(Easing.sin), 
                useNativeDriver: true,
            }),
        ])    
      );
      animation.start();
      return () => animation.stop(); 
    }, [swayAnim]);
  
    // Control the magnitude of the sway by adjusting the outputRange values
    const rotation = swayAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['-5deg', '0deg', '5deg'],
    });
  
    return (
      <Animated.View style={[styles.logoContainer, { transform: [{ rotateZ: rotation }] }]}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </Animated.View>
    );
  };
  
  const styles = StyleSheet.create({
    logoContainer: {
    },
    logo: {
      width: 120, // Adjust based on your logo's size
      height: 120,
    },
  });
  
  export default SwayLogo;
