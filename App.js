import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView } from 'react-native'; // Import ScrollView and SafeAreaView
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

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/backgrounds/background.png')}
        style={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <BaroTracker />
          <NewItem />
          <FilterSearch />
          <ThisWeeksItems />
        </ScrollView>
        <NavBar />
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set a background color to SafeAreaView
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20, // Add some top padding for better spacing
  },
});
