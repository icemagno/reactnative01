import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import { COLORS } from '../constants'

export default function Header(props) {
  return (
    <>
    <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#FFFFFF" translucent = {true}/>
    <View style={styles.container}>
       <Text style={styles.headerText}>{props.title}</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: COLORS.white,
      alignItems: 'center',

      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 10,

    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: COLORS.darkgray
    }  
  });

