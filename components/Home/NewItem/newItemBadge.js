import {View, Text, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import textStyles from '../../../styles/textStyles';
import IconNewItem from '../../../assets/icons/icon_newItem.svg';

const rem = 16;

export default function NewItemBadge() {
    return(
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x:1, y:0.7}}
            style={styles.content}
            locations={[0.0532, 0.8529]}
            colors={['#F0EFF4', '#CFE006']}
        >
            <IconNewItem width={1.0625 * rem} height={1.0625 * rem}/>
            <Text style={styles.text}>New Item</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        width: 5.625 * rem,
        height: 1.5625 * rem,
        backgroundColor: 'white',
        borderRadius: 4,
        paddingHorizontal: 0.3125 * rem,
        paddingVertical: 0.25 * rem
    },
    text: {
        fontSize: 12,
        marginLeft: 0.325 * rem,
        color: "#000",
        fontFamily: "Montserrat_400Regular",
        fontWeight: '800'
    }
});