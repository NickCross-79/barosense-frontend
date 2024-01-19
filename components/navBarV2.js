import React, { useEffect } from "react";
import { useTheme } from 'react-native-paper';
import { View, Text, StyleSheet, Image } from "react-native";
import { BlurView } from "expo-blur";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home/home";
import Vault from "./Vault/vault";
import IconHomeActive from '../assets/icons/icon_home_active.svg';
import IconHomeInactive from '../assets/icons/icon_home_inactive.svg';
import IconHeartInactive from '../assets/icons/icon_heart_inactive.svg';
import IconListActive from '../assets/icons/icon_list_active.svg';
import IconListInactive from '../assets/icons/icon_list_inactive.svg';

const Tab = createBottomTabNavigator();
const rem = 16;

export default function NavBarV2({ baroData, items, newItem, handleItemPress, handleOverviewClose }) {

    const TabBarBlur = () => {
        console.log('test')
        return (
            <View style={{flex: 1}}>
                <View style={styles.tabBar}>
                    <BlurView intensity={10} style={styles.tabBlur} />
                </View>
            </View>
        )
    }
    
    const theme = useTheme();
    theme.colors.secondaryContainer = 'transparent';
    return (
        <NavigationContainer>
            <Tab.Navigator
                unmountOnBlur={false}
                lazy={false}
                shifting={true}
                initialRouteName={"Home"}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarInactiveTintColor: 'grey',
                    tabBarActiveTintColor: 'white',
                    tabBarStyle: {marginBottom: '8%',position: 'absolute', marginHorizontal: '17%', borderColor: 'transparent'},
                    tabBarBackground: () => (
                        <TabBarBlur />
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon = null;
                        let rn = route.name;
                        if (rn == "Home") {
                            icon = focused ? <IconHomeActive style={styles.icon} /> : <IconHomeInactive style={styles.icon} />
                        } else if (rn == "All Items") {
                            icon = focused ? <IconListActive style={styles.icon} /> : <IconListInactive style={styles.icon} />
                        }

                        return icon;
                    }
                })}

            >
                <Tab.Screen name={"Home"} unmountOnBlur={false} component={Home} initialParams={{ inventory: null, baroData: baroData, newItem: newItem, handleItemPress: null }} />
                <Tab.Screen name={"All Items"} component={Vault} initialParams={{ items: items, handleItemPress: handleItemPress }} />

            </Tab.Navigator>
        </NavigationContainer>

    );
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: 'rgba(61, 53, 105, 0.4)',
        height: 4.25 * rem,
        position: 'absolute',
        zIndex: 3,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 2 * rem,
        paddingTop: 1.4 * rem,
    },
    tabBar: {
        width: '100%',
        height: 55,
        borderRadius: 30,
        borderTopColor: 'white',
        borderBottomColor: 'white',
        overflow: 'hidden',
    },
    tabBlur: {
        flex: 1,
        width: "100%",
        backgroundColor: ' rgba(0, 0, 0, 0.6)',
        height: 4.25 * rem,
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