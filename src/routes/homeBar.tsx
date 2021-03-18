 import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';


import Home from '../pages/HomePage'
import PageVaga from '../pages/VagaPage'
import User from '../pages/UserPage'

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
            },
            iconStyle: {
                flex: 0,
                width: 30,
                height: 30
            }


        }}>
            
            <Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarLabel:"",
                tabBarIcon:({color, size}) => {
                    return (
                        <Icon name="home" size={30} color="#fff" />
                    )
                }
            }}
            />

            <Screen 
            name='PageVaga' 
            component={PageVaga}
            options={{
                tabBarLabel:"",
                tabBarIcon:({color, size}) => {
                    return (
                        <Icon name="briefcase" size={30} color="#fff" />
                    )
                }
            }}
            />

            <Screen 
            name='User' 
            component={User}
            options={{
                tabBarLabel:"",
                tabBarIcon:({color, size}) => {
                    return (
                        <Icon name="person-sharp" size={30} color="#fff" />
                    )
                }                
            }}
            />

        </Navigator>

    )
    
}  