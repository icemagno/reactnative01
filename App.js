
// https://www.youtube.com/watch?v=Run8u_f9MYU
// https://www.luiztools.com.br/post/introducao-ao-react-native-3/

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Tabs from './navigation/Tabs';
import Form from './pages/Form';
import HomeAntigo from './pages/HomeAntigo';
import Coordinates from './pages/Coordinates';

 
const AppStack = createStackNavigator();
 
const App = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Tabs"}>
                <AppStack.Screen name="Tabs" component={Tabs} />
                <AppStack.Screen name="HomeAntigo" component={HomeAntigo} />
                <AppStack.Screen name="Form" component={Form} />
                <AppStack.Screen name="Coordinates" component={Coordinates} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default App;