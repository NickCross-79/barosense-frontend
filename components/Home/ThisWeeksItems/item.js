import React from 'react';
import { Text, View, StyleSheet, Image, Platform, Dimensions } from 'react-native';
import IconDucats from '../../../assets/icons/icon_ducats.png';
import IconCredits from '../../../assets/icons/icon_credits.png';
import componentStyles from '../../../styles/componentStyles';
import textStyles from '../../../styles/textStyles';

const windowWidth = Dimensions.get('window').width;

const rem = 16;

export default function Item({name="empty", image=null, credits="999", ducats="999"}) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `data:image/jpeg;base64,${image}`}}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{name}</Text>
        <View style={[styles.rowContainer,{marginTop: 0.5625 * rem}]}>
          <Image
            source={IconDucats}
            style={styles.icon}
          />
          <Text style={[textStyles.h3, styles.price]}>{ducats}</Text>
          <Image
            source={IconCredits}
            style={styles.icon}
          />
          <Text style={[textStyles.h3, styles.price]}>{credits}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 21.5625 * rem,
    height: 5.4375 * rem,
    borderRadius: 8,
    backgroundColor: '#213235',
    marginBottom: rem,
    padding: 0.5 * rem,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 4.4375 * rem,
    height: 4.4375 * rem,
    marginRight: 1.0625 * rem
  },
  rowContainer: {
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    marginRight: 2.8125 * rem,
    marginLeft: 0.1875 * rem,
  },
  name: {
    fontSize: 0.875 * rem,
    color: '#F0EFF4',
    fontWeight: '600'
  },
  category: {
    fontSize: 0.875 * rem,
    color: '#7D9699',
    fontWeight: '600'
  },
  icon: {
    width: rem,
    height: rem,
  }
});