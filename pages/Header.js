import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { styles } from '../constants/theme';

export default function Header(props) {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
    </>
  );
}

