import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
import IconSettingsInactive from '../assets/icons/icon_settings_inactive.svg';
import textStyles from "../styles/textStyles";

const Tab = createMaterialBottomTabNavigator();

export default function NavBarV2() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={"Home"}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let icon;
                        let rn = route.name;

                        if(rn == "Home") {
                            icon = focused ? IconHomeActive : IconHomeInactive
                        } else if (rn == "Vault") {
                            icon = focused ? IconListActive : IconListInactive 
                        }

                        return icon;
                    }
                })}
            >
                <Tab.Screen name={"Home"} component={Home} />
                <Tab.Screen name={"List"} component={Vault} />

            </Tab.Navigator>
        </NavigationContainer>
        
    );
}