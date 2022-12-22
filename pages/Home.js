import React from "react";
import {View, Text } from "react-native";
import { styles } from '../constants/theme';
import Header from "./Header";

const Home = ({ navigation }) => {
    return (
        <>
        <Header title="Principal" />
        <View style={styles.container}>
            <Text>Tela inicial</Text>
        </View>
      </>
    )
};

export default Home;