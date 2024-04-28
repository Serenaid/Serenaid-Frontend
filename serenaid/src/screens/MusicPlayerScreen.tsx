import React from 'react';
import { View, StyleSheet } from 'react-native';
import MusicPlayer from '../components/MusicPlayer';

const MusicPlayerScreen = () => {
  return (
    <View style={styles.container}>
      <MusicPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MusicPlayerScreen;
