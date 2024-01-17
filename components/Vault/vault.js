import { Text, View, StyleSheet } from "react-native";
import ItemList from "../ItemList/itemList";
import textStyles from "../../styles/textStyles";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

const rem = 16

export default function Vault({/*items=null,handleItemPress=null*/ route }) {

  const { params } = route;
  const items = params.items;
  const handleItemPress = params.handleItemPress;
  return (
    <>
      <ItemList items={items} onItemPress={handleItemPress} />
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