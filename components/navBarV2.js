import React from "react";
import { useTheme } from 'react-native-paper';
import { View, Text, StyleSheet, Image } from "react-native";
import { BlurView } from "expo-blur";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./Home/home";
import Vault from "./Vault/vault";
import IconHomeActive from '../assets/icons/icon_home_active.svg';
import IconHomeInactive from '../assets/icons/icon_home_inactive.svg';
import IconHeartInactive from '../assets/icons/icon_heart_inactive.svg';
import IconListActive from '../assets/icons/icon_list_active.svg';
import IconListInactive from '../assets/icons/icon_list_inactive.svg';

const Tab = createMaterialBottomTabNavigator();
const rem = 16;

export default function NavBarV2({baroData, items, newItem, handleItemPress}) {
    const theme = useTheme();
    theme.colors.secondaryContainer = 'transparent';
    return (
        <NavigationContainer>
            <Tab.Navigator
                unmountOnBlur={false}
                lazy={false}
                activeColor="white"
                barStyle={{backgroundColor: 'transparent'}}
                shifting={true}
                initialRouteName={"Home"}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let icon = null;
                        let rn = route.name;

                        if(rn == "Home") {
                            icon = focused ? <IconHomeActive style={styles.icon}/> : <IconHomeInactive style={styles.icon}/>
                        } else if (rn == "All Items") {
                            icon = focused ? <IconListActive style={styles.icon}/> : <IconListInactive style={styles.icon}/>
                        }

                        return icon;
                    }
                })}
                
            >
                <Tab.Screen name={"Home"} component={Home} initialParams={{inventory: null, baroData: baroData, newItem: newItem, handleItemPress: null}}/>
                <Tab.Screen name={"All Items"} component={Vault} initialParams={{items: items, handleItemPress: handleItemPress}} />

            </Tab.Navigator>
        </NavigationContainer>
        
    );
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
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