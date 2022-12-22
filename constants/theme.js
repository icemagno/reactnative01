import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#FC6D3F", // orange
    secondary: "#CDCDD2",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Tahoma", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Tahoma", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Tahoma", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Tahoma", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Tahoma", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Tahoma", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Tahoma", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Tahoma", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Tahoma", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Tahoma", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;

export const styles = StyleSheet.create({
    headerContainer:{
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 20,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    button: {
        marginTop: 20,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.darkgray
    }      
});


