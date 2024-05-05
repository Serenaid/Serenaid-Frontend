import React, { FC, useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const logo = require('../../assets/logo.png');

type Props = {
  loading: boolean;
  dy: number;
  boxHeight: number;
};

const SwayLogo: FC<Props> = ({ loading, dy, boxHeight }) => {
  // const swayAnim = useRef(new Animated.Value(0)).current;
  const [logoHeight, setLogoHeight] = useState(0);
  const rotate = useSharedValue(0);
  const y = useSharedValue(0);
  const opacity = useSharedValue(1);
  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${interpolate(rotate.value, [-1, 0, 1], [-10, 0, 10])}deg`,
        },
      ],
    };
  });

  const loadingStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          // scale: interpolate(opacity.value, [1, 0.3], [1.2, 1]),
          translateY: y.value,
        },
        { scale: interpolate(opacity.value, [1, 0.3], [1.2, 1]) },
      ],
    };
  });

  const startBgAni = useCallback(() => {
    rotate.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 2000 }),
        withTiming(-1, { duration: 2000 }),
      ),
      0,
      true,
    );
  }, []);
  const cancelBgAni = useCallback(() => {
    cancelAnimation(rotate);
  }, []);

  const startOpacityAni = useCallback(() => {
    cancelBgAni();
    rotate.value = withTiming(0, { duration: 100 }, () => {
      y.value = withSpring(boxHeight / 2 - dy - logoHeight / 2, {
        duration: 3000,
      });
      opacity.value = withDelay(
        700,
        withRepeat(withTiming(0.3, { duration: 2000 }), 0, true),
      );
    });
  }, [logoHeight, dy, boxHeight]);

  const cancelOpacityAni = useCallback(() => {
    cancelAnimation(opacity);
    opacity.value = withTiming(1);
    y.value = withTiming(0, { duration: 1000 });
  }, []);

  useEffect(() => {
    startBgAni();
    return () => {
      cancelBgAni();
      cancelOpacityAni();
    };
  }, []);

  useEffect(() => {
    if (loading) {
      startOpacityAni();
    } else {
      cancelOpacityAni();
      startBgAni();
    }
  }, [loading, startOpacityAni]);

  return (
    <Animated.View
      style={[styles.logoContainer, rotateStyle]}
      onLayout={e => {
        setLogoHeight(e.nativeEvent.layout.height);
      }}>
      <Animated.View>
        <Animated.Image
          style={[styles.logo, loadingStyle]}
          source={logo}
          resizeMode="contain"
        />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {},
  logo: {
    width: 122, // Adjust based on your logo's size
    height: 122,
  },
});

export default SwayLogo;
