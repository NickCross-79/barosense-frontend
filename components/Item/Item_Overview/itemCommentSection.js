import { Text, View, StyleSheet } from 'react-native';
import textStyles from '../../../styles/textStyles';
import IconFilter from '../../../assets/icons/icon_filter.svg'
import Comment from './comment';

const rem = 16;

export default function ItemCommentSection() {
    return (
        <View style={{paddingBottom: 1.6 * rem}}>
            <View style={[styles.horizontalSeperator, {marginVertical: 0.625 * rem}]} />
            <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
                <Text style={textStyles.h2}>Comments</Text>
                <View style={styles.rowContainer}>
                    <IconFilter width={rem} height={rem} marginRight={6}/>
                    <Text style={[textStyles.h3]}>Filter</Text>
                </View>
            </View>

            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    horizontalSeperator: {
        height: 1,
        width: '100%',
        backgroundColor: '#7D9699',
        borderRadius: 10,
    },
    icon: {
        width: rem,
        height: rem,
        marginHorizontal: 5
    }
});