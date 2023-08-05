import React from "react";
import { View, StyleSheet, Platform, Dimensions, Image } from "react-native";
import Svg, { Image as SvgImage } from "react-native-svg"; // Import the necessary components
import componentStyles from "../styles/componentStyles";

const windowWidth = Dimensions.get('window').width;

export default function NavBar() {
    return (
        <View style={[componentStyles.container, styles.container]}>
            <Image
              source={require('../assets/icons/home_icon.png')}
              style={styles.icon}
            />
            <CustomSvg
                source={require('../assets/icons/home_icon.svg')}
                style={styles.icon}
            />
            <Image
              source={require('../assets/icons/folderfavorite_icon.png')}
              style={styles.icon}
            />
            <CustomSvg
                source={require('../assets/icons/folderfavorite_icon.svg')}
                style={styles.icon}
            />
            <Image
              source={require('../assets/icons/archive_icon.png')}
              style={styles.icon}
            />
            <CustomSvg
                source={require('../assets/icons/archive_icon.svg')}
                style={styles.icon}
            />
        </View>
    );
}

const CustomSvg = ({ source, style }) => {
    return (
        <View style={style}>
            <Svg
                width="100%"
                height="100%"
                viewBox="0 0 39 39" // Specify the viewBox for the SVG
            >
                <SvgImage
                    width="100%"
                    height="100%"
                    xlinkHref={source}
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: windowWidth * 0.2,
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 40,
        paddingTop: 20,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    icon: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
