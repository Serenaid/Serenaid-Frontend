import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import TrackPlayer, { useTrackPlayerEvents, Event } from 'react-native-track-player';

const MusicPlayer = ({ fileName }) => {
  useEffect(() => {
    // Initialize TrackPlayer
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add({
        id: fileName,
        url: `${TrackPlayer.getDocumentDirectoryPath()}/${fileName}`, // Ensure correct file path
        title: 'Audio Track',
      });
    };

    setupPlayer();

    return () => {
      TrackPlayer.stop(); // Cleanup on unmount
    };
  }, [fileName]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Playing: {fileName}</Text>
      {/* Add controls for the player, e.g., play/pause */}
      <TouchableOpacity onPress={() => TrackPlayer.play()}>
        <Text style={{ fontSize: 16 }}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TrackPlayer.pause()}>
        <Text style={{ fontSize: 16 }}>Pause</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MusicPlayer;
