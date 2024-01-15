import React, { useEffect, useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native'; // Import ScrollView and SafeAreaView
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import BaroTracker from './components/baroTracker';
import NavBar from './components/navBar';
import axios from 'axios';
import {SERVER_ADDRESS} from '@env';
import ItemOverview from './components/Item/Item_Overview/itemOverviewV2';
import BaroPath from './components/Home/Inactive/baroPath';
import Home from './components/Home/home';
import Vault from './components/Vault/vault'
import NavBarV2 from './components/navBarV2';

export default function App() {
  const [baroData, setBaroData] = useState(null);
  const [items, setItems] = useState(null);
  const [newItem, setNewItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [baroInventory, setBaroInventroy] = useState(null);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular
  });

  const handleItemPress = (item) => {
    setSelectedItem(item);
  }

  const handleOverviewClose = () => {
    setSelectedItem(null);
  }

  useEffect(() => {
    async function fetchBaroData() {
      try {
        const newItemData = await axios.get(SERVER_ADDRESS+`/api/baro/inventory/newItem`);
        const baroDataResp = await axios.get(SERVER_ADDRESS+'/api/baro');
        const itemData = await axios.get(SERVER_ADDRESS+'/api/items');
        const baroInventoryData = await axios.get(SERVER_ADDRESS+'/api/baro/inventory');
        setBaroData(baroDataResp.data);
        setItems(itemData.data.items);
        setNewItem(newItemData.data);
        setBaroInventroy(baroInventoryData.data.inventory);
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
        {baroData && <BaroTracker nextDate={baroData.activation} expiry={baroData.expiry} active={baroData.active} location={baroData.location} />}
        {/*selectedItem && <ItemOverview item={selectedItem} handleClose={handleOverviewClose} />*/}
        {/*baroData && <Home inventory={baroInventory} baroData={baroData} newItem={newItem} handleItemPress={handleItemPress} handleOverviewClose={handleOverviewClose}/>*/}
        {baroData && items && newItem && baroInventory && <NavBarV2 baroData={baroData} items={items} newItem={newItem} handleItemPress={handleItemPress}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
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
