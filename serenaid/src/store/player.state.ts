import TrackPlayer, { AddTrack } from 'react-native-track-player';
import { proxy } from 'valtio';

type PlayerStateType = {
  currentTrack: AddTrack | {};
};

export const PlayerState = proxy<PlayerStateType>({
  currentTrack: {},
});
