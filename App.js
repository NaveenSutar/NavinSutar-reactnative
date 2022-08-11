import * as React from 'react';
import Create from './src/screens/Create';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';

console.disableRedBox = true;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                headerBackVisible: false
            }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Create" component={Create} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();

export default App;