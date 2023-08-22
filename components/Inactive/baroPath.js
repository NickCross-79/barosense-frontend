import { View, StyleSheet, Image } from 'react-native';
import LogoBaro from '../../assets/logo_baro.png';
import IconEarth from '../../assets/icons/icon_earth.svg'
import IconBaroPathDot from '../../assets/icons/icon_baroPathDot.svg'

export default function BaroPath() {
    
    const renderPath = () => {
        const path = []
        for(let i = 0;i < 14;i++){
            path.push(<IconBaroPathDot style={styles.baroPathDot} />)
        }
        return path
    }
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
        marginTop: 270
    },
    baroPathDot: {
        marginLeft: 9
    }
})