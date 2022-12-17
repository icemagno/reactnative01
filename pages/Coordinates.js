import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

export default function Coordinates() {
    const navigation = useNavigation();
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
          <View style={styles.container}>

            <Text>Latitude: {lat} </Text>
            <Text>Longitude: {lon}</Text>

            <TouchableOpacity style={styles.button} onPress={getLocation}>
                <Text>Ler Coordenadas</Text>
            </TouchableOpacity>

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
   
  