import {StyleSheet, Text, View, Image} from 'react-native';
import textStyles from '../styles/textStyles';
import componentStyles from '../styles/componentStyles';

export default function FilterSearch () {
    return(
        <View style={styles.rowContainer}>
            <View style={[componentStyles.container, styles.content, styles.sort, styles.rowContainer]}>
                <Text style={[textStyles.h4, textStyles.center]}>A-Z</Text>
                <Image
                    source={require('../assets/icons/dropdown_icon.svg')}
                    style={styles.icon}
                />
            </View>
            <View style={[componentStyles.container, styles.content, styles.filter, styles.rowContainer]}>
                <Text style={[textStyles.h4, textStyles.center]}>All</Text>
                <Image
                    source={require('../assets/icons/dropdown_icon.svg')}
                    style={styles.icon}
                />
            </View>
            <View style={[componentStyles.container, styles.content, styles.search]}>
                <Image
                    source={require('../assets/icons/search_icon.svg')}
                    style={[styles.icon, {marginRight: 12}]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginRight: 11,
        height: 24,
        marginTop: 23,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    sort: {
        width: 65,
    },
    filter: {
        width: 65,
    },
    search: {
        width: 139,
        alignItems: 'flex-end',
    },
    icon: {
        width: 18,
        height: 18,
        marginLeft: 8,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})