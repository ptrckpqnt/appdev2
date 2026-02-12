import { registerRootComponent } from 'expo';

// import Flex from './components/Flex';
// import FlexDirectionBasics from './components/FlexDirectionBasics';
// import DirectionLayout from './components/DirectionLayout';
import JustifyContentBasics from './components/JustifyContentBasics';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(JustifyContentBasics);
