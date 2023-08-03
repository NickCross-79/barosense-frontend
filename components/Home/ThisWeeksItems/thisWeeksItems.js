import { Text, View, StyleSheet } from 'react-native';
import textStyles from '../../../styles/textStyles';
import Item from './item';

export default function ThisWeeksItems() {
    return (
        <View style={styles.container}>
            <Text style={[textStyles.h3, styles.header]}>This Week's Items</Text>
            <View style={styles.itemContainer}>
                <Item/>
                <Item/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    header: {
        marginTop: 15,
        marginBottom: 14,
    },
    itemContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});