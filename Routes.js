import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Tabs from './navigation/Tabs';
import Form from './pages/Form';
import Coordinates from './pages/Coordinates';
 
const AppStack = createStackNavigator();
 
const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Tabs"}>
                <AppStack.Screen name="Tabs" component={Tabs} />
                <AppStack.Screen name="Form" component={Form} />
                <AppStack.Screen name="Coordinates" component={Coordinates} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;