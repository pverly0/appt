import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Welcome';
import TracoOp from './TracoOp';
import EconAmb from './EconAmb';



const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Welcome'>

                <Stack.Screen name='Welcome' component={Welcome}/>
                <Stack.Screen name='TracoOp' component={TracoOp}/>
                <Stack.Screen name='EconAmb' component={EconAmb}/>

            </Stack.Navigator>
        
        </NavigationContainer>
    )
}