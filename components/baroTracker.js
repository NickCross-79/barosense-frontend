import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';
import textStyles from '../styles/textStyles';
import IconTime from '../assets/icons/icon_time.svg'
import IconLocation from '../assets/icons/icon_location.svg'

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
      <Text style={[textStyles.h1, { color: '#D8E778', marginBottom: 0.5625 * rem }]}>Baro Ki'Teer {active ? 'Departs' : 'Arrives'} in</Text>
      <View style={styles.rowContainer}>
        <IconTime width={rem} height={rem} />
        <Text style={[textStyles.h1, {fontWeight: 500, marginLeft: 0.5 * rem}]}>{countDown.days}d {countDown.hours}h {countDown.minutes}m {countDown.seconds}s</Text>
      </View>
      <View style={styles.rowContainer}>
        <IconLocation width={rem} height={rem} />
        <Text style={[textStyles.h1, { fontWeight: 500, marginLeft: 0.5 * rem }]}>
          {location}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 1.5 * rem,
    backgroundColor: '#213235',
    width: 21.5625 * rem,
    height: 6.0625 * rem,
    borderRadius: 8,
    paddingHorizontal: 0.6875 * rem,
    paddingVertical: 0.5 * rem,
    // paddingVertical: 0.9375 * rem,
    // paddingHorizontal: 1.25 * rem,
    // marginTop: 1.25 * rem,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 0.125 * rem },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 0.25 * rem,
    //   },
    //   android: {
    //     elevation: 0.5 * rem,
    //   },
    // }),
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
    marginBottom: 0.5625 * rem,
  },
});

