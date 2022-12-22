// https://www.luiztools.com.br/post/introducao-ao-react-native-3/

import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { styles } from '../constants/theme'
import Header from './Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeAntigo = ({ navigation }) => {
  const [contador, setContador] = useState(0);

  function incrementar(){
    setContador(contador+1);
  }


  return (
    <>
      <Header title="Inicial Antiga"/>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Alô mundo!</Text>
        <Text>Meu Primeiro App</Text>
        <Text>Contagem {contador}</Text>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={incrementar}>
            <Text style={styles.buttonText}>Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form')}>
              <Text style={styles.buttonText}>Form</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Coordinates')}>
              <Text style={styles.buttonText}>Coord</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </>
  );


};

export default HomeAntigo;