import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PageVaga from '../pages/PageVaga';
import Home from '../pages/Home';
import HomeBar from './homeBar'
import User from '../pages/User'

const {Navigator, Screen} = createStackNavigator();


export default function Routes() {
    return (
        
        <NavigationContainer>

            <Navigator screenOptions={{headerShown : false}}>

                <Screen name='Homebar' component={HomeBar}/>
                <Screen name='Home' component={Home}/>
                <Screen name='PageVaga' component={PageVaga}/>
                <Screen name='User' component={User}/>

            </Navigator>

        </NavigationContainer>
        
    )
}