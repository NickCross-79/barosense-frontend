import { StyleSheet } from "react-native";

const rem = 16;

const textStyles = StyleSheet.create({
    default: {
        fontSize: 0.5 * rem, //8
        color: "#F0EFF4",
        fontFamily: "Montserrat_400Regular",
        fontWeight: '800',
    },
    center: {
        alignSelf: 'center',
    },
    h4: {
        fontSize: 0.6875 * rem,
        color: "#F0EFF4",
        fontFamily: "Montserrat_400Regular",
        fontWeight: '700',
    },
    h3: {
        fontSize: 0.75 * rem, //12
        color: "#F0EFF4",
        fontFamily: "Montserrat_400Regular",
    },
    h2: {
        fontSize: 0.875 * rem,
        color: "#F0EFF4",
        fontFamily: "Montserrat_400Regular",
        fontWeight: '800',
    },
    h1: {
        fontSize: rem,
        color: "#F0EFF4",
        fontFamily: "Montserrat_400Regular",
        fontWeight: '800',
    }
});

export default textStyles;