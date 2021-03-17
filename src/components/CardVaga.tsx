import React from 'react'
import {View,SafeAreaView, StyleSheet, Text, TouchableHighlight, Image, Dimensions} from 'react-native'

import api from '../services/api'

export interface Vaga {
    id: number,
    tx_nome: string,
    tx_area_interesse: string,
    tx_detalhes: string,
    tx_faixa_salarial: string,
    cidade: string,
    uf: string,
    pais: string,
    bairro: string,
}

export default function CardVaga(props:any) {

    return (
        <>
        <TouchableHighlight onPress={() => {alert('clicou')}}>


            <SafeAreaView style={styles.container}>

            {/* Imagem lateral */}
            <View style={styles.imgArea}> 
                <Image 
                style={styles.imgLogo} 
                source={require('../../assets/mino-quadrado.png')}/>
            </View>

            <View style={styles.card}>

                <View>
                    {/* Titulo da Vaga */}
                    <Text style={styles.titleVaga}>
                        {`${props.vaga.tx_nome}`}
                    </Text>


                    {/* Empresa */}
                    <Text style={styles.titleEmpresa}>
                        {`${props.vaga.empresa.tx_nome}`}
                    </Text> 
                </View>


                <View style={styles.areaInfo}>

                    <View style={styles.info}>

                        <Text>
                            {`${props.vaga.tx_faixa_salarial}`}
                        </Text>

                    </View>

                    <View style={styles.info}>

                        <Text>
                            {`${props.vaga.cidade} - ${props.vaga.uf}`}
                        </Text>

                    </View>

                </View>
                
            </View>
            
        </SafeAreaView>
        </TouchableHighlight>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        backgroundColor: '#fff'
    },
    titleVaga: {
        fontWeight: 'bold',
        fontSize: 18
    },
    titleEmpresa: {
        fontSize: 15,
        color: '#7a7a7a'
    },
    card: {
        justifyContent: 'space-around',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        width: '80%',
        height: (Dimensions.get('window').height)/5.5,
        
    },
    imgLogo: {
        width: 50,
        height: 50,
        
    },
    areaInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    info: {
        backgroundColor: '#ebebeb',
        padding: 8,
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 1
    },
    imgArea: {
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})