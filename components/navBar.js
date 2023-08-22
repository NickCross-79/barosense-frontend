import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import IconHomeActive from '../assets/icons/icon_home_active.svg';
import IconHeartInactive from '../assets/icons/icon_heart_inactive.svg';
import IconListInactive from '../assets/icons/icon_list_inactive.svg';
import IconSettingsInactive from '../assets/icons/icon_settings_inactive.svg';
import textStyles from "../styles/textStyles";

const rem = 16;

export default function NavBar() {
    return (
        <BlurView 
            style={styles.container}
            intensity={6}
        >
            <View style={styles.iconContainer}>
                <IconHomeActive style={styles.icon}/>
                <Text style={[textStyles.default, {marginTop: 4}]}>Home</Text>
            </View>

            <View style={styles.iconContainer}>
                <IconHeartInactive style={styles.icon}/>
                <Text style={[textStyles.default, {marginTop: 4, color: '#AEB5B9'}]}>Wish List</Text>
            </View>

            <View style={styles.iconContainer}>
                <IconListInactive style={styles.icon}/>
                <Text style={[textStyles.default, {marginTop: 4, color: '#AEB5B9'}]}>All Items</Text>
            </View>

            <View style={styles.iconContainer}>
                <IconSettingsInactive style={styles.icon}/>
                <Text style={[textStyles.default, {marginTop: 4, color: '#AEB5B9'}]}>Settings</Text>
            </View>
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
    iconContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    }
});
