import React from 'react'
import {StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableHighlight} from 'react-native'
import Header from '../components/Header'
import DropDownPicker from 'react-native-dropdown-picker';

import api from '../services/api'

export default function Home() {


    return (
        <>
        <Header/>
        <View style={styles.container}>
            <Text style={styles.title}>
                PAGE REGISTER
            </Text>

            <TextInput 
            style={[styles.btnInput]}
            placeholder='NOME'>
            </TextInput>

            <TextInput 
            style={[styles.btnInput]}
            placeholder='SOBRENOME'>
            </TextInput>

            <View style={styles.containerNasc}>

            <TextInput 
            style={[styles.btnData]}
            placeholder='DIA'
            keyboardType='numeric'>
            </TextInput>

            <TextInput 
            style={[styles.btnData]}
            placeholder='MES'
            keyboardType='numeric'>
            </TextInput>

            <TextInput 
            style={[styles.btnData]}
            placeholder='ANO'
            keyboardType='numeric'>
            </TextInput>

            </View>

            <View style={[styles.containerLocal]}>
            <DropDownPicker
            items={[
                {label: 'AC', value:'AC'},
                {label: 'AL', value:'AL'},
                {label: 'AP', value:'AP'},
                {label: 'AM', value:'AM'},
                {label: 'BA', value:'BA'},
                {label: 'CE', value:'CE'},
                {label: 'DF', value:'DF'},
                {label: 'ES', value:'ES'},
                {label: 'GO', value:'GO'},
                {label: 'MA', value:'MA'},
                {label: 'MT', value:'MT'},
                {label: 'MS', value:'MS'},
                {label: 'MG', value:'MG'},
                {label: 'PA', value:'PA'},
                {label: 'PB', value:'PB'},
                {label: 'PR', value:'PR'},
                {label: 'PE', value:'PE'},
                {label: 'PI', value:'PI'},
                {label: 'RJ', value:'RJ'},
                {label: 'RN', value:'RN'},
                {label: 'RS', value:'RS'},
                {label: 'RO', value:'RO'},
                {label: 'RR', value:'RR'},
                {label: 'SC', value:'SC'},
                {label: 'SP', value:'SP'},
                {label: 'SE', value:'SE'},
                {label: 'TO', value:'TO'}
            ]}
            containerStyle={{
                height: 40, 
                width: '50%'
            }}
            placeholder="ESTADO"
            style={{
                backgroundColor: '#fff',
                borderColor: '#fff'
                        }}
            itemStyle={{
            justifyContent: 'flex-start'
            }}
            />

            <TextInput 
            style={[styles.btnInput]}
            placeholder='CIDADE'>
            </TextInput>
            </View>
            
            <TextInput 
            style={[styles.btnInput]}
            placeholder='EMAIL'>
            </TextInput>

            <TextInput 
            style={[styles.btnInput]}
            placeholder='AREA DE INTERESSE'>
            </TextInput>

            <TouchableHighlight>
                <Text>
                    REGISTER
                </Text>
            </TouchableHighlight>

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
    btnData: {
        width: 40,
        height: 40,
        textAlign: 'center',
        backgroundColor: 'white',
        color: '#000',
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 5

    },
    containerLocal: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerNasc: {
        flexDirection: 'row'
    }
})