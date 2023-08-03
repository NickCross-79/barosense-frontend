import { Text, View, StyleSheet, Image } from 'react-native';
import componentStyles from '../../../styles/componentStyles';
import textStyles from '../../../styles/textStyles';

export default function Item() {
    return (
        <View style={styles.container}>
            {/*Upper*/}
            <View style={[componentStyles.container, styles.itemUpper, styles.rowContainer]}>
                {/*Left*/}
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Image</Text>
                </View>
                
                {/*Right*/}
                <View style={{flex: 1, paddingRight: 15, paddingTop: 14}}>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../../../assets/icons/credits_icon.png')}
                            style={styles.icon}
                        />
                        <Text style={[textStyles.default, styles.price]}>300,000</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../../../assets/icons/ducats_icon.png')}
                            style={styles.icon}
                        />
                        <Text style={[textStyles.default, styles.price]}>350</Text>
                    </View>
                </View>
            </View>

            {/*Lower*/}
            <View style={[componentStyles.container, styles.itemLower]}>
                <Text style={[textStyles.default, styles.name]}>Ki'Teer Reverence Ephemera</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 7,
    },
    itemUpper: {
        width: 139,
        height: 58,
        zIndex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        shadowOpacity: 0.25,
    },
    itemLower: {
        width: 139,
        height: 47,
        marginTop: -27,
        borderRadius: 10,
        backgroundColor: 'rgba(45,72,77,0.80)',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    name: {
        marginBottom: 5,
        textShadowOffset: {width: 0, height: 4}
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    price: {
        marginLeft: 5,
        marginBottom: 11,
    },
    icon: {
        width: 15,
        height: 15,
    },
});