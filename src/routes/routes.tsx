import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomeBar from './homeBar'
import VagaPage from '../pages/VagaPage';
import UserPage from '../pages/UserPage'
import EmpresaPage from '../pages/EmpresaPage';

const {Navigator, Screen} = createStackNavigator();


export default function Routes() {
    return (
        
        <NavigationContainer>

            <Navigator screenOptions={{headerShown : false}}>

                <Screen name='Homebar' component={HomeBar}/>
                <Screen name='WelcomePage' component={WelcomePage}/>
                <Screen name='LoginPage' component={LoginPage}/>
                <Screen name='RegisterPage' component={RegisterPage}/>
                
                <Screen name='VagaPage' component={VagaPage}/>
                <Screen name='UserPage' component={UserPage}/>
                <Screen name='EmpresaPage' component={EmpresaPage}/>
            </Navigator>

        </NavigationContainer>
        
    )
}