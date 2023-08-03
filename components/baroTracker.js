import { Text, View, StyleSheet, Image } from "react-native";
import textStyles from "../styles/textStyles";

export default function baroTracker() {
    return (
        <View style={styles.content}>
            
            <Text style={[textStyles.h2, {marginBottom: 6}]}>Baro Ki'Teer departs in:</Text>
            <View style={styles.rowContainer}>
                <Image 
                    source={require('../assets/icons/icon-timer-1.png')}
                    style={styles.timerIcon}
                />
                <Text style={[textStyles.h1, {marginBottom: 3}]}>1d 17h 22m 12s</Text>
            </View>
            <View style={styles.rowContainer}>
                <Image 
                    source={require('../assets/icons/icon-location.png')}
                    style={styles.locationIcon}
                />
                <Text style={textStyles.h2}>Strata Relay (Earth)</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: 215,
        height: 78,
        marginTop: 37
    },
    timerIcon: {
        width: 29,
        height: 29,
        marginRight: 11,
    },
    locationIcon: {
        width: 16,
        height: 16,
        marginTop: 4,
        marginRight: 4,
    },
    rowContainer: {
        flexDirection: 'row',
    }
});
