import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import RNFS from 'react-native-fs';
import { useNavigation } from '@react-navigation/native';

const PlaylistScreen = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const directoryPath = `${RNFS.DocumentDirectoryPath}`;

    RNFS.readDir(directoryPath)
      .then(files => {
        const playlist = files
          .filter(file => file.isFile() && file.name.endsWith('.wav'))
          .map(file => file.name);
        setAudioFiles(playlist);
      })
      .catch(err => {
        console.error('Error reading directory:', err);
      });
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Audio Files</Text>
      <FlatList
        data={audioFiles}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={
              () => navigation.navigate('MusicPlayer', { fileName: item }) // Pass the fileName
            }>
            <Text style={{ fontSize: 16 }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PlaylistScreen;
