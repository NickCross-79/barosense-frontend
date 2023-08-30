import { View, Text, StyleSheet } from 'react-native';
import textStyles from '../../../styles/textStyles';
import IconRecommendInactive from '../../../assets/icons/icon_recommend_inactive.svg'

const rem = 16;

export default function RecommendedSection() {
    return (
        <View style={[styles.rowContainer,{marginTop: 21, justifyContent: 'space-evenly'}]}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{fontSize: 1.5 * rem, fontWeight: '700', color: '#D8E778'}}>92%</Text>
                <Text style={[textStyles.h2]}>of users recommend</Text>
            </View>
            <View style={[styles.verticalSeperator, {marginHorizontal: 1.5 * rem}]}/>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <IconRecommendInactive width={2.5 * rem} height={2.5 * rem}/>
                <Text style={[textStyles.h2, {flex: 1}]}>Recommend</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    verticalSeperator: {
        width: 1,
        height: 4.125 * rem,
        backgroundColor: '#6D6D6D',
        borderRadius: 10,
    }
});