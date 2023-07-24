import { Text, View, StyleSheet, Image } from "react-native";

export default function baroTracker() {
    return (
        <View style={styles.content}>
            
            <Text style={styles.h2}>Baro Ki'Teer departs in:</Text>
            <View style={styles.rowContainer}>
                <Image 
                    source={require('../assets/icons/icon-timer-1.png')}
                    style={styles.timerIcon}
                />
                <Text style={styles.h1}>1d 17h 22m 12s</Text>
            </View>
            <View style={styles.rowContainer}>
                <Image 
                    source={require('../assets/icons/icon-location.png')}
                    style={styles.locationIcon}
                />
                <Text style={styles.h2}>Strata Relay Earth</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: 215,
        height: 78,
        marginTop: 50,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
    },
    h1: {
        fontSize: 24,
        fontWeight: 600,
        color: '#F0EFF4',
    },
    h2: {
        fontSize: 16,
        fontWeight: 600,
        color: '#F0EFF4',
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
