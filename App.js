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
  const [items, setItems] = useState(null);
  const [newItem, setNewItem] = useState(null);
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular
  });
  
  const activeState = true;

  useEffect(() => {
    async function fetchBaroData() {
      try {
        const baroDataResp = await axios.get(SERVER_ADDRESS+'/api/baro');
        const newItemData = await axios.get(SERVER_ADDRESS+`/api/baro/inventory/newItem`);
        const itemData = await axios.get(SERVER_ADDRESS+'/api/items');
        setBaroData(baroDataResp.data);
        setItems(itemData.data.items);
        setNewItem(newItemData.data);
      } catch (err) {
        const baroDataResp = await axios.get(SERVER_ADDRESS+'/api/baro');
        //setBaroData(baroDataResp.data);
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
        {!activeState && <BaroTracker nextDate={baroData.activation} expiry={baroData.expiry} active={activeState} location={baroData.location} />}
        {activeState && (<>
          <ScrollView contentContainerStyle={styles.content}>
            {baroData && <BaroTracker nextDate={baroData.activation} expiry={baroData.expiry} active={activeState} location={baroData.location} />}
            {newItem && <NewItem item={newItem}/>}
            {items && <ThisWeeksItems items={items} />}
          </ScrollView>
        </>)}
        <NavBar />
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set a background color to SafeAreaView
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24, // Add some top padding for better spacing
  },
});
