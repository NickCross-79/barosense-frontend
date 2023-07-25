import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BaroTracker from './components/baroTracker';
import NewItem from './components/Home/NewItem/newItem';
import FilterSearch from './components/filterSearch';

export default function App() {
  return (
    <ImageBackground 
      source={require('./assets/backgrounds/background.png')}
      style={styles.container}
    >
      <View style={styles.content}>
        <BaroTracker />
        <StatusBar style="auto" />
      </View>
      <NewItem />
      <FilterSearch />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
