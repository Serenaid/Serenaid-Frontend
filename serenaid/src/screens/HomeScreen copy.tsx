import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import BackgroundAnimation from '../components/BackgroundAnimation';
import RNFetchBlob from 'react-native-blob-util';
import SwayLogo from '../components/SwayLogo';
import AppName from '../components/AppName';

const HomeScreen = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    console.log("Submitted text:", text);  // Logging the submitted text for demonstration
  };

  return (
    <View style={styles.container}>
      <BackgroundAnimation />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.upperContent}>
          <SwayLogo />
          <AppName />
        </View>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
          <View style={styles.lowerContent}>
            <TextInput
              style={styles.textInput}
              onChangeText={setText}
              value={text}
              placeholder="Sleep easily..."
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Generate</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  upperContent: {
    position: 'absolute',
    top: '20%', // Adjusted top margin to bring content closer to the top but not touching the app bar
    alignItems: 'center',
    width: '100%',
  },
  keyboardAvoidView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContent: {
    marginTop: 160, // Ensures that the lower content is well below the upper content
    width: '80%',
    alignItems: 'center',
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
  },
  button: {
    backgroundColor: '#5D5FEF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    shadowOpacity: 0.3,
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
