import React from 'react'
import {View, StyleSheet, Text, Dimensions,Image} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'


export default function cardVaga(props:any) {
    return (
        <>
        <View style={styles.container}>

            {/* Imagem lateral */}
            <View style={styles.imgArea}> 
                <Image style={styles.imgLogo} source={require('../../assets/mino-quadrado.png')}/>
            </View>


            <View style={styles.card}>

                <View>
                    {/* Titulo da Vaga */}
                    <Text style={styles.titleVaga}>
                        {props.nomeVaga}
                    </Text>


                    {/* Empresa */}
                    <Text style={styles.titleEmpresa}>
                        {props.Empresa}
                    </Text>
                </View>


                <View style={styles.areaInfo}>

                    <View style={styles.info}>

                        <Text>
                            {props.faixaSalarialVaga}
                        </Text>

                    </View>

                    <View style={styles.info}>

                        <Text>
                            {props.cidade} - {props.UF}
                        </Text>

                    </View>

                </View>
            </View>
            
        </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 5,
        marginTop: 15,
        width: '100%',
        backgroundColor: '#fFf'
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
        marginLeft: 15,
        height: 100,
        width: '100%',
        paddingRight: 100,
        backgroundColor: '#fff'
        
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
        marginTop: 5
    }
    
})