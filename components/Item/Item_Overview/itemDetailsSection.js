import { Text, StyleSheet, View, Image } from 'react-native';
import textStyles from '../../../styles/textStyles';
import IconDucats from '../../../assets/icons/icon_ducats.png';
import IconCredits from '../../../assets/icons/icon_credits.png';
import IconFalse from '../../../assets/icons/icon_false.svg';
import IconTrue from '../../../assets/icons/icon_true.svg';

const rem = 16;

export default function ItemDetailsSection({item=null}) {
    return (
        <View>
            <View style={styles.horizontalSeperator}/>
            <Text style={[textStyles.h3, styles.sectionHeader]}>Details</Text>
            <View style={[styles.columnContainer, {justifyContent: 'space-between', alignSelf: 'center', width: '90%'}]}>

                    <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
                        <View style={styles.rowContainer}>
                            <Image source={IconDucats} style={styles.icon}/>
                            <Text style={[textStyles.h3, {marginRight: rem}]}>{item.ducat_price}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={textStyles.h3}>Tradable:</Text>
                            {item.is_tradable ? <IconTrue width={20} height={20} /> : <IconFalse width={20} height={20}/>}
                        </View>
                    </View>
                    
                    <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
                        <View style={styles.rowContainer}>
                            <Image source={IconCredits} style={styles.icon}/>
                            <Text style={textStyles.h3}>{item.credit_price}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={textStyles.h3}>Mastery:</Text>
                            {item.can_master ? <IconTrue width={20} height={20}/> : <IconFalse width={20} height={20}/>}
                        </View> 
                    </View>
                    <View style={[styles.rowContainer, {marginTop: 0.5625 * rem, alignSelf: 'center'}]}>
                        <Text style={[textStyles.h3, {marginRight: 0.5 * rem}]}>Last Appearance:</Text>
                        <Text style={[textStyles.h3, {color: '#D8E778'}]}>{item.last_date === null ? '' : item.last_date.split('T')[0]}</Text>
                    </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    columnContainer: {
        flexDirection: 'column'
    },
    sectionHeader: {
        alignSelf: 'center', 
        marginTop: 0.25 * rem,
        marginBottom: 0.375 * rem,
        fontWeight: '600', 
        color: '#7D9699'
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