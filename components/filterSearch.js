import {StyleSheet, Text, View} from 'react-native';

export default function FilterSearch () {
    return(
        <View style={styles.content}>
            <Text>A-Z</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#2D484D',
        width: 65,
        height: 24,
        borderRadius: 20,
        marginTop: 23,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    }
})