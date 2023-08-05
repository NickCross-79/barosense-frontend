import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Platform, FlatList } from 'react-native';
import textStyles from '../../../styles/textStyles';
import Item from './item';
import axios from 'axios';

const server = 'https://5aaf-174-95-62-172.ngrok-free.app/api/items';

export default function ThisWeeksItems() {

  const [items, setItems] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(server);
      console.log(response.data.items);
      setItems(response.data.items);
    }

    getData();
  }, []);

  const renderItem = ({item}) => (
    <Item name={item.name} credits={item.credit_price} ducats={item.ducat_price}/>
  )
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[textStyles.h3, styles.header]}>This Week's Items</Text>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          numColumns={2}
          contentContainerStyle={styles.container}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20, // Add top padding for better spacing
    paddingBottom: 50, // Add bottom padding for better spacing
  },
  header: {
    marginTop: 15,
    marginBottom: 14,
    ...Platform.select({
      ios: {
        fontWeight: '600', // Increase font weight for iOS
      },
      android: {
        fontWeight: '500', // Use a slightly different font weight for Android
      },
    }),
  },
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute items evenly
    paddingHorizontal: 20, // Add horizontal padding
  },
});