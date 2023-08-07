import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';
import textStyles from '../styles/textStyles';

const rem = 16; // Define your base rem size

export default function BaroTracker({nextDate=null, expiry=null, active=false, location="Unknown"}) {
  const nextDateObj = new Date(nextDate);
  const expiryObj = new Date(expiry);
  const [countDown, setCountDown] = useState(calculateCountdown(nextDateObj));

  useEffect(() => {
    const interval = setInterval(() => {
      if(!active) {
        const newCountdown = calculateCountdown(nextDateObj);
        setCountDown(newCountdown);
      } else {
        const newCountdown = calculateCountdown(expiryObj);
        setCountDown(newCountdown);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [nextDateObj]);

  function calculateCountdown(target) {
    const now = new Date();
    const diffInMillis = Math.max(target - now, 0);
    const days = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMillis % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInMillis % (1000 * 60)) / 1000);
    return {days, hours, minutes, seconds};
  }

  return (
    <View style={styles.content}>
      <Text style={[textStyles.h2, { marginBottom: 0.375 * rem }]}>Baro Ki'Teer {active ? 'departs' : 'arrives'} in:</Text>
      <View style={styles.rowContainer}>
        <Image
          source={require('../assets/icons/icon-timer-1.png')}
          style={styles.timerIcon}
        />
        <Text style={[textStyles.h1, { marginBottom: 0.1875 * rem }]}>{countDown.days}d {countDown.hours}h {countDown.minutes}m {countDown.seconds}s</Text>
      </View>
      <View style={styles.rowContainer}>
        <Image
          source={require('../assets/icons/icon-location.png')}
          style={styles.locationIcon}
        />
        <Text style={[textStyles.h2, { marginTop: Platform.OS === 'ios' ? 0.125 * rem : 0 }]}>
          {location}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 0.9375 * rem,
    paddingHorizontal: 1.25 * rem,
    marginTop: 1.25 * rem,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.125 * rem },
        shadowOpacity: 0.1,
        shadowRadius: 0.25 * rem,
      },
      android: {
        elevation: 0.5 * rem,
      },
    }),
  },
  timerIcon: {
    width: 1.8125 * rem,
    height: 1.8125 * rem,
    marginRight: 0.6875 * rem,
  },
  locationIcon: {
    width: 1 * rem,
    height: 1 * rem,
    marginTop: Platform.OS === 'ios' ? 0.25 * rem : 0,
    marginRight: 0.25 * rem,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

