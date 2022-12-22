// https://www.luiztools.com.br/post/introducao-ao-react-native-4/

import React from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import { styles } from '../constants/theme'

const Form = ({ navigation }) => {
  return (
      <>
        <Header title="Cadastro" />
        <View style={styles.container}>
            <Text>Teremos um formulário aqui!</Text>
        </View>
      </>
  );
}

export default Form;