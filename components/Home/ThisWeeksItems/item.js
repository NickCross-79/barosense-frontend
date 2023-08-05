import React from 'react';
import { Text, View, StyleSheet, Image, Platform, Dimensions } from 'react-native';
import componentStyles from '../../../styles/componentStyles';
import textStyles from '../../../styles/textStyles';

const windowWidth = Dimensions.get('window').width;

export default function Item({name="empty", credits="999", ducats="999"}) {
  return (
    <View style={styles.container}>
      {/*Upper*/}
      <View style={[componentStyles.container, styles.itemUpper, styles.rowContainer]}>
        {/*Left*/}
        <View style={styles.leftContainer}>
          <Text>Image</Text>
        </View>

        {/*Right*/}
        <View style={styles.rightContainer}>
          <View style={styles.rowContainer}>
            <Image
              source={require('../../../assets/icons/credits_icon.png')}
              style={styles.icon}
            />
            <Text style={[textStyles.default, styles.price]}>{credits}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Image
              source={require('../../../assets/icons/ducats_icon.png')}
              style={styles.icon}
            />
            <Text style={[textStyles.default, styles.price]}>{ducats}</Text>
          </View>
        </View>
      </View>

      {/*Lower*/}
      <View style={[componentStyles.container, styles.itemLower]}>
        <Text style={[textStyles.default, styles.name]}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: windowWidth * 0.02, // Responsive margin based on device width
  },
  itemUpper: {
    width: windowWidth * 0.4, // Responsive width based on device width
    height: windowWidth * 0.17, // Responsive height based on device width
    zIndex: 1,
    borderRadius: windowWidth * 0.02, // Responsive borderRadius based on device width
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.25,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    paddingRight: windowWidth * 0.035, // Responsive paddingRight based on device width
    paddingTop: windowWidth * 0.036, // Responsive paddingTop based on device width
  },
  itemLower: {
    width: windowWidth * 0.4, // Responsive width based on device width
    height: windowWidth * 0.13, // Responsive height based on device width
    marginTop: -windowWidth * 0.074, // Responsive marginTop based on device width
    borderRadius: windowWidth * 0.02, // Responsive borderRadius based on device width
    backgroundColor: 'rgba(45,72,77,0.80)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  name: {
    marginBottom: windowWidth * 0.013, // Responsive marginBottom based on device width
    ...Platform.select({
      ios: {
        textShadowOffset: { width: 0, height: 4 },
      },
      android: {
        textShadowRadius: 4,
        textShadowColor: 'black',
      },
    }),
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  price: {
    marginLeft: windowWidth * 0.014, // Responsive marginLeft based on device width
    marginBottom: windowWidth * 0.035, // Responsive marginBottom based on device width
  },
  icon: {
    width: windowWidth * 0.04, // Responsive width based on device width
    height: windowWidth * 0.04, // Responsive height based on device width
  },
});