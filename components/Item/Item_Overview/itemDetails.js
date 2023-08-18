import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import IconClose from '../../../assets/icons/icon_close.svg';
import textStyles from '../../../styles/textStyles';
import IconRecommendInactive from '../../../assets/icons/icon_recommend_inactive.svg'
import IconDucats from '../../../assets/icons/icon_ducats.png'
import IconCredits from '../../../assets/icons/icon_credits.png'
import IconFalse from '../../../assets/icons/icon_false.svg'
import IconFilter from '../../../assets/icons/icon_filter.svg'
import Comment from './comment';

const rem = 16;
const overlayHeight = Dimensions.get('window').height - (1.75 * rem);

export default function ItemDetails({item=null}) {
    return (
            <BlurView intensity={6} style={styles.blurOverlay}>
                <View style={styles.content}>
                    <IconClose style={{alignSelf: 'flex-end'}} />
                    <View style={styles.itemImage}/>
                    <View style={[styles.rowContainer,{marginTop: 1.25 * rem}]}>
                        <Text style={textStyles.h1}>Ki'Teer Reverence Ephemera</Text>
                        <View style={{borderRadius: 10, width: 4, height: 4, backgroundColor: '#7D9699', marginHorizontal: 7, marginTop: 3}} />
                        <Text style={[textStyles.h3,styles.wikiLink]}>See on wiki</Text>
                    </View>
                    <Text style={[textStyles.h1, {color: '#7D9699'}]}>Cosmetic</Text>
                    <ScrollView>
                        <Text style={[textStyles.h2, styles.description]}>"Exemplify sophistication with every step."</Text>
                        
                        {/* Recommend */}
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

                        {/* Details */}
                        <View>
                            <View style={styles.horizontalSeperator}/>
                            <Text style={[textStyles.h3, styles.sectionHeader]}>Details</Text>
                            <View style={[styles.columnContainer, {justifyContent: 'space-between', alignSelf: 'center', width: '90%'}]}>

                                    <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
                                        <View style={styles.rowContainer}>
                                            <Image source={IconDucats} style={styles.icon}/>
                                            <Text style={[textStyles.h3, {marginRight: rem}]}>350</Text>
                                        </View>
                                        <View style={styles.rowContainer}>
                                            <Text style={textStyles.h3}>Tradable:</Text>
                                            <IconFalse width={20} height={20}/>
                                        </View>
                                    </View>
                                    
                                    <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
                                        <View style={styles.rowContainer}>
                                            <Image source={IconCredits} style={styles.icon}/>
                                            <Text style={textStyles.h3}>300,000</Text>
                                        </View>
                                        <View style={styles.rowContainer}>
                                            <Text style={textStyles.h3}>Mastery:</Text>
                                            <IconFalse width={20} height={20}/>
                                        </View> 
                                    </View>
                                    <View style={[styles.rowContainer, {marginTop: 0.5625 * rem, alignSelf: 'center'}]}>
                                        <Text style={[textStyles.h3, {marginRight: 0.5 * rem}]}>Last Appearance:</Text>
                                        <Text style={[textStyles.h3, {color: '#D8E778'}]}>2023-06-30</Text>
                                    </View>
                            </View>
                        </View>

                        {/* Comments */}

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
                    </ScrollView>
                    <View style={styles.commentBox}>
                        <View style={styles.rowContainer}>
                            <Text style={[textStyles.h3, {color: '#9F9F9F'}]}>Add a comment...</Text>
                        </View>
                    </View> 
                </View>
            </BlurView>
    );
}

const styles = StyleSheet.create({
    content: {
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
        height: '100%',
        position: 'absolute',
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemImage: {
        width: 120,
        height: 120,
        backgroundColor: 'white',
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
        backgroundColor: '#7D9699',
        borderRadius: 10,
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