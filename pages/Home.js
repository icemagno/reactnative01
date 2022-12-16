// https://www.luiztools.com.br/post/introducao-ao-react-native-3/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

import Header from './Header';

export default function Home() {
  const [contador, setContador] = useState(0);

  function incrementar(){
    setContador(contador+1);
  }


  return (
    <>
    <Header title="Cabeçalho"/>
    <View style={styles.container}>
      <Text style={styles.title}>Alô mundo!</Text>
      <Text>Meu Primeiro App</Text>
      <Text>Contagem {contador}</Text>

      <TouchableOpacity style={styles.button} onPress={incrementar}>
        <Text>Pressione Aqui</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
    </>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});