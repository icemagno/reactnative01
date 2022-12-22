import React from "react";
import {View, Text } from "react-native";
import { styles } from '../constants/theme';
import Header from "./Header";

const Mapa = ({ navigation }) => {
    return (
        <>
            <Header title="Mapa" />
            <View style={styles.container}>
                <Text>Mapa</Text>
            </View>
        </>
    )
};

export default Mapa;