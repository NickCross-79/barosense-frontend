import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import BaroTracker from './components/baroTracker';
import NewItem from './components/Home/NewItem/newItem';
import FilterSearch from './components/filterSearch';
import ThisWeeksItems from './components/Home/ThisWeeksItems/thisWeeksItems';
import NavBar from './components/navBar';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

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
      <ThisWeeksItems />
      <NavBar />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
