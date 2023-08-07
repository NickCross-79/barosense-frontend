import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Platform, FlatList } from 'react-native';
import textStyles from '../../../styles/textStyles';
import Item from './item';

export default function ThisWeeksItems({items=null}) {
  const renderItem = ({item}) => (
    <Item name={item.name} image={item.thumbnail} credits={item.credit_price} ducats={item.ducat_price}/>
  )
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[textStyles.h3, styles.header]}>This Week's Items</Text>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          numColumns={2}
          contentContainerStyle={styles.itemContainer}
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
    justifyContent: 'space-between', // Distribute items evenly
    paddingHorizontal: 20, // Add horizontal padding
  },
});