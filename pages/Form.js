// https://www.luiztools.com.br/post/introducao-ao-react-native-4/

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

export default function Form() {
  const navigation = useNavigation();

  return (
      <>
        <Header title="Cadastro" />
        <View style={styles.container}>
            <Text>Teremos um formulário aqui!</Text>

      
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <Text>Voltar</Text>
            </TouchableOpacity>

        </View>
      </>
  );
}
 
const styles = StyleSheet.create({
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
    }    
});
 
