import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import IconFilter from '../assets/icons/icon_filter.svg';

export default function FilterSearch() {
  return (
    <View style={styles.content}>
      <IconFilter />
      <Text style={styles.filter}>Filter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '80%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  filter: {
    fontSize: 12,
    color: "#F0EFF4",
    fontFamily: "Montserrat_400Regular",
    fontWeight: 'normal',
  }
});
