import React, { useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; // Import ScrollView and SafeAreaView
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import BaroTracker from '../baroTracker';
import AppLoading from 'expo-app-loading';
import NewItem from './NewItem/newItem';
import ThisWeeksItems from './ThisWeeksItems/thisWeeksItems';
import BaroPath from '../Inactive/baroPath';

export default function Home({inventory, baroData, newItem, handleItemPress}) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular
  });
  
  const activeState = true//baroData.active;

  const thisWeeksItemsComponent = useMemo(() => {
    if(inventory) {
      return <ThisWeeksItems items={inventory} onItemPress={handleItemPress} />
    }
    return null
  }, [inventory]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
        <>
          {newItem && activeState && <NewItem item={newItem} onPress={handleItemPress}/>}
          {!activeState && <BaroPath baroData={baroData} />}
          {activeState && (<>
            <View contentContainerStyle={styles.content}>
              {thisWeeksItemsComponent}
            </View>
          </>)}
          <StatusBar style="auto" />
        </>
    </View>
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