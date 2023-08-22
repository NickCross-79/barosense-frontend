import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundNewItem from '../../../assets/backgrounds/background_newItem.png'
import NewItemBadge from "./newItemBadge";
import textStyles from "../../../styles/textStyles";

const rem = 16;

export default function NewItem({item=null, onPress}) {
    return(
        <TouchableOpacity onPress={() => onPress(item)}>
            <ImageBackground
                source={BackgroundNewItem}
                style={styles.container}
                imageStyle={styles.imageBackground}
                blurRadius={8}
            >
                {item.thumbnail != undefined && <Image
                        source={{uri: `data:image/jpeg;base64,${item.thumbnail}`}}
                        style={styles.newItemImage}
                    />}
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x:0, y:1}}
                    locations={[0, 1]}
                    style={styles.overlay}
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.60)']}
                >   
                    <NewItemBadge />
                    {item.name != undefined && <Text style={styles.name}>{item.name}</Text>}
                    {item.name != undefined && <Text style={styles.category}>{item.type}</Text>}
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 1.5 * rem,
        width: 21.5625 * rem,
        height: 8.6875 * rem,
        alignSelf: 'center',
    },
    imageBackground: {
        borderRadius: 8,
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 2,
        padding: 0.75 * rem
    },
    newItemImage: {
        width: 120,
        height: 120,
        alignSelf: 'center',
    },
    name: {
        fontSize: rem,
        marginTop: 50,
        color: "#F0EFF4",
        fontFamily: "Montserrat_400Regular",
        fontWeight: 'bold',
    },
    category: {
        fontSize: rem,
        color: "#7D9699",
        fontFamily: "Montserrat_400Regular",
        fontWeight: 'bold',
    },
    gradientText: {
        position: 'absolute'
    }
});
