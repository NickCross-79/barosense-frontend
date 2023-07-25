import { Text, View, StyleSheet, Image} from "react-native";
import gradientText from "./gradientText";

export default function newItem() {
    return(
        <View style={styles.container}>
            <Image
                source={require('../../../assets/backgrounds/newItemBackground.png')}
                style={styles.backgroundImage}
            />
            
            <Text style={styles.text}>Ki'Teer Reverence Ephemera</Text>
            <gradientText style={styles.gradientText} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 29,
        width: 251,
        height: 157,
        alignSelf: 'center',
        borderRadius: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    text: {
        flex: 1,
        color: 'white',
        position: 'absolute',
        marginTop: 131,
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 700,
    },
    gradientText: {
        position: 'absolute'
    }
});
