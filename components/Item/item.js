import React, { memo } from 'react';
import { Text, View, StyleSheet, Image, Platform, Dimensions, TouchableOpacity } from 'react-native';
import IconDucats from '../../assets/icons/icon_ducats.png';
import IconCredits from '../../assets/icons/icon_credits.png';
import textStyles from '../../styles/textStyles';

const rem = 16;

const Item = ({item=null, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
    <View style={styles.container}>
      
        <Image
          source={{uri: `data:image/jpeg;base64,${item.thumbnail}`}}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.category}>{item.type}</Text>
          <View style={[styles.rowContainer,{marginTop: 0.5625 * rem}]}>
            <Image
              source={IconDucats}
              style={styles.icon}
            />
            <Text style={[textStyles.h3, styles.price]}>{item.ducat_price}</Text>
            <Image
              source={IconCredits}
              style={styles.icon}
            />
            <Text style={[textStyles.h3, styles.price]}>{item.credit_price}</Text>
          </View>
        </View>
      
    </View>
    </TouchableOpacity>
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

export default Item