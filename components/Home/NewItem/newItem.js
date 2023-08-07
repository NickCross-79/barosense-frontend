import { Text, View, StyleSheet, Image, ScrollView} from "react-native";
import GradientText from "./gradientText";

export default function NewItem({image=null, name='Item not Available'}) {
    return(
        <View style={styles.container}>
            <Image
                source={require('../../../assets/backgrounds/newItemBackground.png')}
                style={styles.backgroundImage}
            />
            <Image
                source={{uri: `data:image/jpeg;base64,${image}`}}
                style={styles.newItemImage}
            />
            <GradientText text={name} />
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
    newItemImage: {
        position: 'absolute',
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: 5,
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
