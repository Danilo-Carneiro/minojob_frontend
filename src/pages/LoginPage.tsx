import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'
import Header from '../components/Header'


export default function Home() {
    return (
        <>
        <Header/>
        <View style={styles.container}>
            <Text style={styles.title}>
                PAGE LOGIN
            </Text>
            <TextInput 
            style={[styles.btnInput]}
            placeholder='E-MAIL'>
            </TextInput>

            <TextInput 
            style={[styles.btnInput]}
            placeholder='SENHA'>
            </TextInput>

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#57B894',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 30
    
    },
    btnInput: {
        width: '50%',
        height: 40,
        backgroundColor: 'white',
        color: '#000',
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 5
    },
})