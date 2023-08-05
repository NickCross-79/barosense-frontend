import { Text, View, StyleSheet, Image} from "react-native";
import GradientText from "./gradientText";

export default function NewItem() {
    return(
        <View style={styles.container}>
            <Image
                source={require('../../../assets/backgrounds/newItemBackground.png')}
                style={styles.backgroundImage}
            />
            <GradientText text={"Ki'Teer Reverence Ephemera"} />
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
        position: 'absolute',
        marginTop: 131,
        alignSelf: 'center',
    },
    gradientText: {
        position: 'absolute'
    }
});
