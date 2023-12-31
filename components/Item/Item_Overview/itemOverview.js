import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';
import IconClose from '../../../assets/icons/icon_close.svg';
import textStyles from '../../../styles/textStyles';
import ItemDetailsSection from './itemDetailsSection';
import RecommendedSection from './recommendSection';
import ItemCommentSection from './itemCommentSection';
import NewItemBadge from '../../Home/NewItem/newItemBadge';
import IconFilter from '../../../assets/icons/icon_filter.svg'

const rem = 16;
const overlayHeight = Dimensions.get('window').height - (1.75 * rem);

export default function ItemOverview({item=null, handleClose}) {
    return (
        <View style={styles.blurOverlay}>
            <TouchableWithoutFeedback onPress={() => handleClose()}>
            <BlurView intensity={6} style={styles.blurOverlay} /> 
            </TouchableWithoutFeedback>

            {/* Details Pane */}
            <View style={styles.content}>
                <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
                    <View>
                        {item.is_new && <NewItemBadge />}
                    </View>
                    <TouchableOpacity onPress={() => handleClose()}>
                        <IconClose />
                    </TouchableOpacity>
                </View>
                
                <View style={{borderColor: '#7D9699', borderWidth: 1, borderRadius: 8}}>
                    <Image
                        source={{uri: `data:image/jpeg;base64,${item.thumbnail}`}}
                        style={styles.itemImage}
                    />
                </View>
                <View style={[styles.rowContainer,{marginTop: 1.25 * rem}]}>
                    <Text style={textStyles.h1}>{item.name}</Text>
                    <View style={{borderRadius: 10, width: 4, height: 4, backgroundColor: '#7D9699', marginHorizontal: 7, marginTop: 3}} />
                    <Text style={[textStyles.h3,styles.wikiLink]}>See on wiki</Text>
                </View>
                <Text style={[textStyles.h1, {color: '#7D9699'}]}>{item.type}</Text>
                <ScrollView stickyHeaderIndices={[3]}>
                    <Text style={[textStyles.h2, styles.description]}>{item.description}</Text>
                    
                    {/* Recommend */}
                    <RecommendedSection />

                    {/* Details */}
                    <ItemDetailsSection item={item} />

                    {/* Comments */}
                    <View style={{backgroundColor: '#213235'}}>
                        <View style={[styles.rowContainer, {justifyContent: 'space-between', marginTop: 10}]}>
                            <Text style={textStyles.h2}>Comments</Text>
                            <View style={styles.rowContainer}>
                                <IconFilter width={rem} height={rem} marginRight={6}/>
                                <Text style={[textStyles.h3]}>Filter</Text>
                            </View>
                        </View>
                        <View style={[styles.horizontalSeperator, {marginVertical: 0.625 * rem}]} />
                    </View>
                    <ItemCommentSection />
                </ScrollView>
                <View style={styles.commentBox}>
                    <View style={styles.rowContainer}>
                        <Text style={[textStyles.h3, {color: '#9F9F9F'}]}>Add a comment...</Text>
                    </View>
                </View> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        zIndex: 4,
        width: 21.5625 * rem,
        height: 34.25 * rem,
        marginBottom: 35,
        backgroundColor: '#213235',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#000',
        borderWidth: 1,
        padding: 0.9375 * rem
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    columnContainer: {
        flexDirection: 'column'
    },
    blurOverlay: {
        width: '100%',
        height: overlayHeight,
        position: 'absolute',
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemImage: {
        width: 120,
        height: 120,
        alignSelf: 'center'
    },
    wikiLink: {
        color: '#7D9699',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    description: {
        color: '#7D9699', 
        marginTop: 1.25 * rem, 
        fontWeight: '500', 
        fontStyle: 'italic'
    },
    sectionHeader: {
        alignSelf: 'center', 
        marginTop: 0.25 * rem,
        marginBottom: 0.375 * rem,
        fontWeight: '600', 
        color: '#7D9699'
    },
    commentBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 2.625 * rem,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#5C5C5C',
        justifyContent: 'center',
        paddingHorizontal: 0.9375 * rem
    },
    verticalSeperator: {
        width: 1,
        height: 4.125 * rem,
        backgroundColor: '#6D6D6D',
        borderRadius: 10,
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