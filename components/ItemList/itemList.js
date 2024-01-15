import React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import Item from '../Item/item';

const rem = 16;

const ItemList = ({items=null, onItemPress=()=>{}}) => {
  const renderItem = ({item}) => (
    <Item item={item} onPress={handleItemPress}/>
  )

  const handleItemPress = (item) => {
    onItemPress(item);
  }
  //console.log("vault:",items[0])
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.uniqueName}
            numColumns={1}
            contentContainerStyle={styles.itemContainer}
          />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 100, // Add top padding for better spacing
    paddingBottom: 350, // Add bottom padding for better spacing
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute items evenly
  },
});

export default ItemList