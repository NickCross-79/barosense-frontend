import React, { useEffect, useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'; // Import ScrollView and SafeAreaView
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import BaroTracker from './components/baroTracker';
import NewItem from './components/Home/NewItem/newItem';
import ThisWeeksItems from './components/Home/ThisWeeksItems/thisWeeksItems';
import NavBar from './components/navBar';
import axios from 'axios';
import {SERVER_ADDRESS} from '@env';
import ItemOverview from './components/Item/Item_Overview/itemOverview';
import BaroPath from './components/Inactive/baroPath';

export default function App() {
  const [baroData, setBaroData] = useState(null);
  const [items, setItems] = useState(null);
  const [newItem, setNewItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular
  });
  
  const activeState = true;

  const handleItemPress = (item) => {
    setSelectedItem(item);
  }

  const handleOverviewClose = () => {
    setSelectedItem(null);
  }

  const thisWeeksItemsComponent = useMemo(() => {
    if(items) {
      return <ThisWeeksItems items={items} onItemPress={handleItemPress} />
    }
    return null
  }, [items]);

  useEffect(() => {
    async function fetchBaroData() {
      try {
        //console.log(SERVER_ADDRESS)
        const baroDataResp = await axios.get(SERVER_ADDRESS+'/api/baro');
        const newItemData = await axios.get(SERVER_ADDRESS+`/api/baro/inventory/newItem`);
        const itemData = await axios.get(SERVER_ADDRESS+'/api/items');
        setBaroData(baroDataResp.data);
        setItems(itemData.data.items);
        setNewItem(newItemData.data);
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
        {selectedItem && <ItemOverview item={selectedItem} handleClose={handleOverviewClose} />}
        <>
          {!activeState && <BaroTracker nextDate={baroData.activation} expiry={baroData.expiry} active={activeState} location={baroData.location} />}
          {baroData && <BaroTracker nextDate={baroData.activation} expiry={baroData.expiry} active={activeState} location={baroData.location} />}
          {/*newItem*/false && <NewItem item={newItem} onPress={handleItemPress}/>}
          <BaroPath />
          {!activeState && (<>
            <View contentContainerStyle={styles.content}>
              {thisWeeksItemsComponent}
            </View>
          </>)}
          <NavBar />
          <StatusBar style="auto" />
        </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
