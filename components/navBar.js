import React from "react";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import IconHomeActive from '../assets/icons/icon_home_active.svg';
import IconHeartInactive from '../assets/icons/icon_heart_inactive.svg';
import IconListInactive from '../assets/icons/icon_list_inactive.svg';
import IconSettingsInactive from '../assets/icons/icon_settings_inactive.svg';

const rem = 16;

export default function NavBar() {
    return (
        <BlurView 
            style={styles.container}
            intensity={6}
        >
            <IconHomeActive style={styles.icon}/>
            <IconHeartInactive style={styles.icon}/>
            <IconListInactive style={styles.icon}/>
            <IconSettingsInactive style={styles.icon}/>
        </BlurView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        height: 4.25 * rem,
        position: 'absolute',
        zIndex: 3,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 2 * rem,
        paddingTop: 1.4 * rem,
    },
    icon: {
        width: 1.75 * rem,
        height: 1.75 * rem
    },
});
