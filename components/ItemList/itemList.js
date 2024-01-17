import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import Item from '../Item/item';
import { useIsFocused } from '@react-navigation/native';

const rem = 16;

const ItemList = ({ items = null, onItemPress = () => { } }) => {

  const flatListRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 10));
  const isFocused = useIsFocused();

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: false, offset: 0 });
    }

    setVisibleItems(items.slice(0, 10));
  }, [isFocused]);

  const loadMoreItems = () => {
    const nextItems = items.slice(visibleItems.length, visibleItems.length + 10);
    setVisibleItems((prevData) => [...prevData, ...nextItems]);
  }

  const renderItem = ({ item }) => (
    <Item item={item} onPress={handleItemPress} />
  )

  const handleItemPress = (item) => {
    onItemPress(item);
  }
  return (
    <>
      <FlatList
        ref={flatListRef}
        style={styles.container}
        data={visibleItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.uniqueName}
        numColumns={1}
        contentContainerStyle={styles.itemContainer}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.1}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingTop: 100, // Add top padding for better spacing
    paddingBottom: 350, // Add bottom padding for better spacing
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute items evenly
  },
});

export default ItemList