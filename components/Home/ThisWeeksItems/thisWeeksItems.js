import React from 'react';
import { Text, View, StyleSheet, ScrollView, Platform, FlatList } from 'react-native';
import textStyles from '../../../styles/textStyles';
import IconFilter from '../../../assets/icons/icon_filter.svg';
import Item from '../../Item/item';

const rem = 16;

const ThisWeeksItems = ({items=null, onItemPress=()=>{}}) => {
  const renderItem = ({item}) => (
    <Item item={item} onPress={handleItemPress}/>
  )

  const handleItemPress = (item) => {
    onItemPress(item);
  }

  return (
    <>
      <View style={[styles.rowContainer, {marginBottom: 10}]}>
        <Text style={[textStyles.h1, styles.header]}>This Week's Items</Text>
        <IconFilter />
        <Text style={styles.filter}>Filters</Text>
      </View>
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
    alignItems: 'center',
    paddingTop: 20, // Add top padding for better spacing
    paddingBottom: 350, // Add bottom padding for better spacing
  },
  rowContainer: {
    marginTop: 1.75 * rem,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  filter: {
    marginLeft: 0.375 * rem,
    fontSize: 0.75 * rem,
    color: "#F0EFF4",
    fontFamily: "Montserrat_400Regular",
    fontWeight: 'normal',
  },
  header: {
    marginLeft: 10,
    marginRight: 8.8 * rem,
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
  },
});

export default ThisWeeksItems