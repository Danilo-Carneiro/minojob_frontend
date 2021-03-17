 import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import PageVaga from '../pages/PageVaga'
import User from '../pages/User'

const { Navigator, Screen } = createBottomTabNavigator();

export default function homeBar() {
   
    return (
        
        <Navigator 
        tabBarOptions={{
            activeBackgroundColor: "#3C9071",
            activeTintColor: "#fff",
            inactiveBackgroundColor: "#57B894",
            inactiveTintColor: "#000",
            style: {
                height: 60
            },
            labelStyle: {
                fontSize: 15,
                fontWeight: "bold",
            },
            tabStyle: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            }

        }}>
            
            <Screen 
            name='PageVaga' 
            component={PageVaga}
            options={{
                tabBarLabel:"VAGAS"
            }}
            />
            <Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarLabel:"HOME"
            }}
            />
            <Screen 
            name='User' 
            component={User}
            options={{
                tabBarLabel:"USUARIO"
            }}
            />

        </Navigator>

    )
    
}  