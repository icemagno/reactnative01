import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';
import * as Location from 'expo-location';
import { styles } from '../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const Coordinates = ({navigation}) => {

    const [lat, setLat] = useState(0.0);
    const [lon, setLon] = useState(0.0);

    async function getLocation () {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let { coords } = await Location.getCurrentPositionAsync( { "accuracy" : Location.Accuracy.Balanced }  );
        console.log( coords );
        setLat( coords.latitude);
        setLon( coords.longitude);
        // {"accuracy": 13.743000030517578, "altitude": 18.100000381469727, "altitudeAccuracy": 1, "heading": 0, "latitude": -22.8839144, "longitude": -43.0943207, "speed": 0}
    }

    return (
        <>
          <Header title="Coordenadas" />
          <SafeAreaView style={styles.container}>
              <Text>Latitude: {lat} </Text>
              <Text>Longitude: {lon}</Text>
              <View style={styles.buttonArea}>
                  <TouchableOpacity style={styles.button} onPress={getLocation}>
                      <Text style={styles.buttonText}>Ler</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Voltar</Text>
                  </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );


  };

  export default Coordinates;


  