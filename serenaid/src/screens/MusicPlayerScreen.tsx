import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useEffect, useRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import TrackPlayer, {
  AddTrack,
  RepeatMode,
  State,
  usePlaybackState,
} from 'react-native-track-player';
import {
  IconMusicFilter,
  IconRepeateAll,
  IconRepeateOne,
  IconShuffle,
} from '../assets/iconfont';
import IconNext from '../assets/images/IconNext';
import IconPause from '../assets/images/IconPause';
import IconPlay from '../assets/images/IconPlay';
import IconPrevious from '../assets/images/IconPrevious';
import BackgroundAnimation from '../components/BackgroundAnimation';
import { CustomBackdrop } from './module/CustomBackdrop';

const logo = require('../../assets/logo.png');
const MusicPlayerScreen = ({ route }) => {
  const { state } = usePlaybackState();
  const params = route.params;
  const playing = state === State.Playing;
  const rotate = useSharedValue(0);
  const [currentTrack, setCurrentTrack] = useState<
    AddTrack | Record<string, any>
  >({});
  const bsRef = useRef<BottomSheetModal>(null);
  const [queue, setQueue] = useState<AddTrack[]>([]);
  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotate.value === 360 ? 0 : rotate.value}deg`,
        },
      ],
    };
  });
  const [loopType, setLoopType] = useState<RepeatMode>(RepeatMode.Off);

  const changeRepeatMode = () => {
    if (loopType === RepeatMode.Off) {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setLoopType(RepeatMode.Track);
    } else if (loopType === RepeatMode.Track) {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setLoopType(RepeatMode.Queue);
    } else {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setLoopType(RepeatMode.Off);
    }
  };

  const skipTo = async (type: 'next' | 'prev', index?: number) => {
    const len = queue.length;
    const curIndex = await TrackPlayer.getActiveTrackIndex();
    await TrackPlayer.pause();
    await TrackPlayer.seekTo(0);
    if (type === 'next') {
      if (curIndex === len - 1) {
        TrackPlayer.skipToNext(curIndex);
      } else {
        TrackPlayer.skipToNext();
      }
    } else {
      if (curIndex === 0) {
        TrackPlayer.skipToPrevious(0);
      } else {
        TrackPlayer.skipToPrevious();
      }
    }
    await TrackPlayer.play();
  };
  const skipByIndex = async (index: number) => {
    await TrackPlayer.pause();
    await TrackPlayer.seekTo(0);
    await TrackPlayer.skip(index);
    await TrackPlayer.play();
  };

  const play = async () => {
    if (playing) {
      TrackPlayer.pause();
    } else {
      if (state === State.Ended) {
        await TrackPlayer.seekTo(0);
      }
      TrackPlayer.play();
    }
  };

  // const
  useEffect(() => {
    if (params) {
      if (params?.index !== undefined) {
        skipByIndex(params.index);
      }
    }
  }, [params]);

  useEffect(() => {
    if (state === State.Playing) {
      // TrackPlayer.setRepeatMode();
      rotate.value = withRepeat(
        withTiming(360, { duration: 15000, easing: Easing.linear }),
        0,
      );
      TrackPlayer.getActiveTrack().then(track => {
        setCurrentTrack(track!);
      });
    } else {
      cancelAnimation(rotate);
    }
    TrackPlayer.getQueue().then(qu => {
      setQueue([...qu]);
    });
  }, [state]);

  return (
    <View style={styles.container}>
      <BackgroundAnimation />
      {}
      <View style={styles.cover}>
        <Animated.Image style={[styles.logo, rotateStyle]} source={logo} />
        <Text style={styles.trackTitle}>{currentTrack.title}</Text>
      </View>
      <View style={styles.playerBox}>
        <View style={styles.playController}>
          <Pressable onPress={changeRepeatMode}>
            {loopType === RepeatMode.Off ? (
              <IconShuffle color={'white'} size={24} />
            ) : loopType === RepeatMode.Track ? (
              <IconRepeateOne color={'white'} size={24} />
            ) : (
              <IconRepeateAll color={'white'} size={24} />
            )}
          </Pressable>
          <TouchableOpacity onPress={() => skipTo('prev')}>
            <IconPrevious color={'white'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playContainer} onPress={play}>
            {playing ? (
              <IconPause color={'white'} size={37} />
            ) : (
              <IconPlay color={'white'} size={37} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => skipTo('next')}>
            <IconNext color={'white'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => bsRef.current?.present()}>
            <IconMusicFilter color={'white'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheetModal
        handleComponent={null}
        snapPoints={['70%']}
        ref={bsRef}
        backgroundStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        backdropComponent={(props: any) => <CustomBackdrop {...props} />}>
        <BottomSheetScrollView contentContainerStyle={{ rowGap: 10 }}>
          {queue.map((item, idx) => {
            const active = item.title === currentTrack.title;
            return (
              <Pressable
                onPress={() => {
                  skipByIndex(idx);
                }}
                style={[
                  styles.item,
                  { backgroundColor: active ? 'rgba(0,0,0,0.6)' : 'transparent' },
                ]}
                key={idx}>
                <Text style={[styles.queueItemText]}>{item.title}</Text>
                {active ? (
                  <>
                    {playing ? (
                      <IconPlay size={18} color={'#5D5FEF'} />
                    ) : (
                      <IconPause size={18} color={'#5D5FEF'} />
                    )}
                  </>
                ) : null}
              </Pressable>
            );
          })}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </View>
  );
};

export default MusicPlayerScreen;

const styles = StyleSheet.create({
  modal: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  playList: {},
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
  },
  playContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    padding: 7,
    borderColor: 'white',
  },
  playIcon: {
    width: 40,
    height: 40,
  },
  playerBox: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust based on your logo's size
    height: 200,
  },
  cover: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#5D5FEF',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  playController: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    columnGap: 25,
    // borderTopColor: '#E1E1E7',
    // borderTopWidth: 1,
    backgroundColor: 'rgba(62, 65, 73,0.4)',
  },
  trackTitle: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  queueItemText: {
    color: 'white',
    fontSize: 17,
  },
});
