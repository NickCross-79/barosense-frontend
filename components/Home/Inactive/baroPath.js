import { View, StyleSheet, Image } from 'react-native';
import LogoBaro from '../../../assets/logo_baro.png'//'../../assets/logo_baro.png';
import IconEarth from '../../../assets/icons/icon_earth.svg'
import IconBaroPathDot from '../../../assets/icons/icon_baroPathDot.svg'
import { MotiView } from 'moti';
import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

export default function BaroPath({ baroData }) {
    const isFocused = useIsFocused();
    const [reset, setReset] = useState(false);
    const daysUntilArrival = (activation) => {
        return Math.ceil((new Date(activation) - new Date()) / (1000 * 3600 * 24));
    }
    const daysLeft = daysUntilArrival(baroData.activation)

    const renderPath = () => {
        const path = []
        for (let i = 0; i < daysLeft; i++) {
            path.push(
                <MotiView
                    from={{
                        scale: 0,
                        //translateY: -90,
                    }}
                    animate={{
                        scale: 1.2,
                        //translateY: (i%2==0) ? -90 : -110,
                    }}
                    transition={{
                        loop: true,
                        type: 'timing',
                        duration: 1500,
                        delay: (i*100),
                    }}
                >
                    <IconBaroPathDot style={styles.baroPathDot} />
                </MotiView>
            )
        }
        return path
    }

    useEffect(() => {
        setReset(!reset);
    },[isFocused])

    return (
        <View style={styles.content}>
            <Image
                source={LogoBaro}
            />
            {renderPath()}
            <IconEarth />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 220
    },
    baroPathDot: {
        marginLeft: 9
    }
})