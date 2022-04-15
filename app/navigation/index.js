import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import Profile from '../screen/Home/Profile';

const RootStack=createNativeStackNavigator();

function RootNavigatorStack(){
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name='Home' component={Home} />
                <RootStack.Screen name='Profile' component={Profile}/>

            </RootStack.Navigator>

        </NavigationContainer>
    )
}

export default RootNavigatorStack