import { StyleSheet, Text, View } from "react-native";
import textStyles from "../../../styles/textStyles";
import IconUpvoteTrue from '../../../assets/icons/icon_upvote_true.svg';
import IconDownvote from '../../../assets/icons/icon_downvote.svg';

export default function Comment() {
    return (
        <View style={styles.content}>
            <Text style={[textStyles.h3, {flexWrap: 'wrap', width: 246}]}>new ephemera lets goooo</Text>
            <View style={[styles.rowContainer, {marginTop: 7, justifyContent: "space-between"}]}>
                <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
                    <IconUpvoteTrue />
                    <Text style={[textStyles.h3, {marginHorizontal: 14, color: '#7D9699'}]}>28</Text>
                    <IconDownvote />
                </View>
                
                <Text style={[textStyles.h3, {color: '#7D9699'}]}>7h ago</Text>
                <Text style={[textStyles.h3, {color: '#D8E778', fontWeight: 'bold'}]}>You</Text>
            </View>
            <View style={styles.horizontalSeperator} />
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginTop: 15
    },
    rowContainer: {
        flexDirection: 'row'
    },
    horizontalSeperator: {
        marginTop: 15,
        width: '100%',
        height: 1,
        backgroundColor: '#6D6D6D',
    }
});