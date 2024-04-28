import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import TrackPlayer, { useTrackPlayerEvents, Event, State } from 'react-native-track-player';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();
  
      // Load tracks from Deezer API
      const response = await axios.get('https://api.deezer.com/search?q=radiohead');
      const tracks = response.data.data.map((track) => ({
        id: track.id.toString(),
        url: track.preview,
        title: track.title,
        artist: track.artist.name,
      }));
  
      await TrackPlayer.add(tracks);
  
      const events = [Event.PlaybackState, Event.d];
  
      useTrackPlayerEvents(events, (event) => {
        if (event.type === Event.PlaybackState) {
          setIsPlaying(event.state === State.Playing);
        } else if (event.type === Event.PlaybackActiveTrackChanged) {
          if (event.nextTrack !== undefined) {
            const trackId = event.nextTrack;
            const foundTrack = tracks.find((track) => track.id === trackId);
            setCurrentTrack(foundTrack);
          }
        }
      });
    };
  
    setupPlayer();
  
    return () => {
      TrackPlayer.stop();
    };
  }, []);
  
  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  return (
    <View style={styles.container}>
      {currentTrack ? (
        <>
          <Text style={styles.trackTitle}>{currentTrack.title}</Text>
          <Text style={styles.trackArtist}>{currentTrack.artist}</Text>
        </>
      ) : (
        <Text>No track playing</Text>
      )}
      <Button title={isPlaying ? 'Pause' : 'Play'} onPress={togglePlayback} />
      <Button title="Next" onPress={skipToNext} />
      <Button title="Previous" onPress={skipToPrevious} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  trackArtist: {
    fontSize: 16,
    color: 'gray',
  },
});

export default MusicPlayer;
