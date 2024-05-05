import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { TrackPlayerInitializer } from './src/services/player.service';
TrackPlayerInitializer();
AppRegistry.registerComponent(appName, () => App);
