// https://www.luiztools.com.br/post/introducao-ao-react-native-4/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
 
export default function Form() {
  return (
      <>
        <Header title="Cadastro" />
        <View style={styles.container}>
            <Text>Teremos um formulário aqui!</Text>
        </View>
      </>
  );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});
 
