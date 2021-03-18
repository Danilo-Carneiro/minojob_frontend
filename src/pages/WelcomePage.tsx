import React from 'react'
/* import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
 */
import {
    StyleSheet, 
    Text, 
    View, 
    TouchableHighlight, 
    Image,
    
    } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Ionicons';

export default function Home() {

    const { navigate } = useNavigation();

    return (
        <>
        <View style={styles.container}>

            <View style={[styles.textBloco]}>
                <Text style={styles.title}>
                    Bem Vindo!
                </Text>
            </View>

            <View>
                <Image 
                style={styles.img}
                source={require('../../assets/imagepcd.png')}
                />
            </View>



            
            <TouchableHighlight
            onPress={() => navigate("RegisterPage")}
            style={[styles.btnRegister, 
                    styles.alingCenterAll]}>

                <View 
                style={[styles.textBtn, 
                        styles.alingCenterAll]}>

                    <Text 
                    style={[styles.textBtn, 
                            styles.alingCenterAll]}>
                        Criar nova Conta
                        </Text>
                    
                    <Icon
                    style={{marginLeft: 7}}
                    name="log-out-outline" 
                    size={30} 
                    color="#fff" />

                </View>

            </TouchableHighlight>

            {/* <Text style={styles.textBtn}>ou</Text> */}

            <Text 
            style={[styles.textBtn, 
                    styles.alingCenterAll]}>
                Arrasta pra cima e faça seu Login
            </Text>

            <TouchableHighlight
            onPress={() => navigate("LoginPage")}
            style={[styles.btnUp]}>
                <Icon 
                name="chevron-up" 
                size={50} 
                color="#fff" 
                />
            </TouchableHighlight>
            
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#57B894',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textBloco: {
        width: '100%',
        marginTop: '20%',
        marginLeft: '25%'
        
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    img: {
        width: 350,
        height: 350,
    },
    btnUp: {
        alignItems: 'center',
        height:60,
        width: '100%'
    },
    btnRegister: {
        width: '65%',
        height: 50,
        borderColor: '#Fff',
        borderWidth: 3,
        borderRadius: 8,
        marginBottom: 60,
        marginTop: 60

    },
    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        flexDirection: 'row',

    },
    alingCenterAll: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})
