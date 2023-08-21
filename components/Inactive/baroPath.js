import { Text, View, StyleSheet, Image } from 'react-native';
import LogoBaro from '../../assets/logo_baro.png';

export default function BaroPath() {
    return (
        <View style={styles.content}>
            <Image
                source={LogoBaro}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row'
    }
})