import {View, Text, StyleSheet} from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import textStyles from '../../../styles/textStyles';

export default function GradientText({text}) {
    return(
        <MaskedView
            style={styles.mask}
            maskElement={
                <View style={styles.content}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            }
        >
            
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x:1, y:0.7}}
                style={styles.gradient}
                locations={[0.0532, 0.8529]}
                colors={['#F0EFF4', '#CFE006']}
            />
        </MaskedView>
    )
}

const styles = StyleSheet.create({
    mask: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        marginTop: 64,
    },
    content: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        flex: 1,
        height: '100%',
    },
    text: {
        fontSize: 16,
        color: 'blue',
        fontWeight: '700',
    }
})