import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import homeBar from './homeBar'
import VagaPage from '../pages/VagaPage';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage'

const {Navigator, Screen} = createStackNavigator();


export default function Routes() {
    return (
        
        <NavigationContainer>

            <Navigator screenOptions={{headerShown : false}}>

                <Screen name='WelcomePage' component={WelcomePage}/>
                <Screen name='LoginPage' component={LoginPage}/>
                <Screen name='RegisterPage' component={RegisterPage}/>
                
                <Screen name='homebar' component={homeBar}/>
                <Screen name='HomePage' component={HomePage}/>
                <Screen name='VagaPage' component={VagaPage}/>
                <Screen name='UserPage' component={UserPage}/>

            </Navigator>

        </NavigationContainer>
        
    )
}