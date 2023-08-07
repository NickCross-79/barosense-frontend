import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView } from 'react-native'; // Import ScrollView and SafeAreaView
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import BaroTracker from './components/baroTracker';
import NewItem from './components/Home/NewItem/newItem';
import FilterSearch from './components/filterSearch';
import ThisWeeksItems from './components/Home/ThisWeeksItems/thisWeeksItems';
import NavBar from './components/navBar';
import axios from 'axios';
import {SERVER_ADDRESS} from '@env';

export default function App() {
  const [baroData, setBaroData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular
  });
  

  useEffect(() => {
    async function fetchBaroData() {
      try {
        const baroDataResp = await axios.get(SERVER_ADDRESS+'/api/baro');
        const itemData = await axios.get(SERVER_ADDRESS+'/api/items/Jolt');
        setBaroData(baroDataResp.data);
        setImageData(itemData.data);
      } catch (err) {
        console.error('Error fetching baroData:',err);
      }
    }
    fetchBaroData();
  }, []);

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
          {baroData && <BaroTracker nextDate={baroData.activation} active={baroData.active} location={baroData.location} />}
          {imageData && <NewItem image={imageData.thumbnail} name={imageData.name} />}
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
