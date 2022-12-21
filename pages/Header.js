import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

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
      paddingTop: 30,
      paddingBottom: 10,
      backgroundColor: 'navy',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    }
  });

