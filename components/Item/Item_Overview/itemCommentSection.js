import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import textStyles from '../../../styles/textStyles';
import IconFilter from '../../../assets/icons/icon_filter.svg'
import Comment from './comment';

const rem = 16;

export default function ItemCommentSection() {
    return (
        <View style={{paddingBottom: 1.6 * rem}}>
            
            
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
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
        backgroundColor: '#6D6D6D',
        borderRadius: 10,
    },
    icon: {
        width: rem,
        height: rem,
        marginHorizontal: 5
    }
});