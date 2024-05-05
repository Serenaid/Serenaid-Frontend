import TrackPlayer, {AddTrack, Event} from 'react-native-track-player';
import {setPlayerState} from '../store/player.state';

// async function setupPlayerEvents() {
//   TrackPlayer.addEventListener('remote-play', async () => {
//     await TrackPlayer.play();
//   });

//   TrackPlayer.addEventListener('remote-pause', async () => {
//     await TrackPlayer.pause();
//   });

//   TrackPlayer.addEventListener('remote-next', async () => {
//     await TrackPlayer.skipToNext();
//   });

//   TrackPlayer.addEventListener('remote-previous', async () => {
//     await TrackPlayer.skipToPrevious();
//   });

//   // Additional event handlers for the track player can go here
// }
let initialized = false;
TrackPlayer.registerPlaybackService(() => {
  // await TrackPlayer.setupPlayer();
  // await setupPlayerEvents();
  return async () => {};
});

export const TrackPlayerInitializer = async () => {
  if (!initialized) {
    await TrackPlayer.setupPlayer();
    initialized = true;
    console.log('TrackPlayer initialized');
  }
};
