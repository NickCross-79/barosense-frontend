import { Image, View, StyleSheet } from "react-native";
import componentStyles from "../styles/componentStyles";

export default function NavBar() {
    return (
        <View style={[componentStyles.container, styles.container]}>
                <Image
                    source={require('../assets/icons/home_icon.svg')}
                    style={[styles.icon, {left: 40}]}
                />
                <Image
                    source={require('../assets/icons/folderfavorite_icon.svg')}
                    style={[styles.icon, {left: 160}]}
                />
                <Image
                    source={require('../assets/icons/archive_icon.svg')}
                    style={[styles.icon, {left: 280}]}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 101,
        position: 'fixed',
        bottom: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
        top: 12,
        width: 39,
        height: 39,
    }
})