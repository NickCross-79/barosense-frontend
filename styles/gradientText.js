import {View, Text, StyleSheet} from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientText({text}) {
    return(
        <MaskedView
            style={{ flex: 1, flexDirection: 'row'}}
            maskElement={
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                    {text}
                </Text>
            }
        >
            <LinearGradient
                colors={['#F0EFF4', '#CFE006']}
                start={[0, 0]} end={[1, 0]}
                style={{ flex: 1 }}
            />
        </MaskedView> 
        
    )
}