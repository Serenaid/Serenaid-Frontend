import React, { useEffect, useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { CircleFade } from 'react-native-animated-spinkit';
import RNFS from 'react-native-fs';
import AppName from '../components/AppName';
import BackgroundAnimation from '../components/BackgroundAnimation';
import SwayLogo from '../components/SwayLogo';
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { useSnapshot } from 'valtio';
import { PlayerState, addTrack } from '../store/player.state';
import TrackPlayer from 'react-native-track-player';

const audioList = [
  {
    title: 'lofi',
    file: require('../assets/audio/lofi.mp3'),
  },
  {
    title: 'piano',
    file: require('../assets/audio/piano.mp3'),
  },
  {
    title: 'meditation',
    file: require('../assets/audio/meditation.mp3'),
  },
];

const HomeScreen = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState('');
  const [dy, setDy] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);
  const opacity = useSharedValue(1);
  const nav = useNavigation();
  const strore = useSnapshot(PlayerState);

  const handleSubmit = async () => {
    const url = 'http://34.30.141.54:80/api/music';
    const body = JSON.stringify({
      description: prompt,
      duration: 3, // Default length
    });

    try {
      const audio = audioList.find(item => item.title === prompt);
      if (!audio) {
        return;
      }
      setLoading(true);
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
          setLoading(false);
          TrackPlayer.add({
            url: audio.file,
            title: prompt,
          });
          TrackPlayer.getQueue().then(queue => {
            nav.navigate('MusicPlayer', { index: queue.length - 1 });
          });
        }, 3000);
      });
      return;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();

      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Data = reader.result.split(',')[1];
        const _path = `${RNFS.DownloadDirectoryPath}/test.wav`;

        try {
          await RNFS.writeFile(_path, base64Data, 'base64');
          Alert.alert('Audio file saved successfully');
          await TrackPlayer.add({
            url: _path,
            title: prompt,
          });
          TrackPlayer.getQueue().then(queue => {
            nav.navigate('MusicPlayer', { index: queue.length - 1 });
          });
        } catch (writeError) {
          console.error('Error writing audio file:', writeError.message);
          Alert.alert(`Error saving audio file: ${writeError.message}`);
        }
        setLoading(false);
      };

      // Read the Blob as a Data URL to extract base64 data
      reader.readAsDataURL(blob);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching or saving audio:', error.message);
      Alert.alert(`Error fetching or saving audio: ${error.message}`);
    }
  };

  useEffect(() => {
    if (loading) {
      opacity.value = withTiming(0, { duration: 100 });
    } else {
      opacity.value = withDelay(1000, withTiming(1, { duration: 500 }));
    }
  }, [loading]);

  return (
    <View
      style={styles.container}
      onLayout={e => {
        setBoxHeight(e.nativeEvent.layout.height);
      }}>
      <BackgroundAnimation />
      <View
        style={styles.upperContent}
        onLayout={e => {
          setDy(e.nativeEvent.layout.y);
        }}>
        <SwayLogo dy={dy} loading={loading} boxHeight={boxHeight} />
        <Animated.Text
          style={[styles.appName, { opacity: opacity, marginTop: 10 }]}>
          Serenaid
        </Animated.Text>
      </View>
      <View style={styles.lowerContent}>
        <Animated.View style={{ opacity: opacity, width: '100%' }}>
          <TextInput
            style={styles.textInput}
            onChangeText={setPrompt}
            value={prompt}
            placeholder="Sleep easily..."
            placeholderTextColor="#999"
            editable={!loading}
          />
        </Animated.View>
        <Animated.View style={{ opacity: opacity, marginTop: 50 }}>
          <Pressable
            disabled={loading}
            style={[
              styles.button,
              { backgroundColor: loading ? '#717aff' : '#5D5FEF' },
            ]}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>Generate</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appName: {
    marginTop: 10, // Space between logo and app name
    fontSize: 24,
    color: '#FFFFFF', // Consider a color that stands out against your background
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  upperContent: {
    // position: 'absolute',
    marginTop: '20%', // Adjusted top margin to bring content closer to the top but not touching the app bar
    alignItems: 'center',
    // width: '100%',
  },
  keyboardAvoidView: {
    flex: 1,
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContent: {
    width: '100%',
    marginTop: 20, // Ensures that the lower content is well below the upper content
    // width: '80%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: '100%',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    color: '#000',
  },
  button: {
    // backgroundColor: '#5D5FEF',
    // paddingVertical: 12,
    // paddingHorizontal: 30,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 25,
    elevation: 3,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
