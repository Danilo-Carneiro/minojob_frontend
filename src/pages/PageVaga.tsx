import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import Header from '../components/Header'
import CardVaga, {Vaga} from '../components/CardVaga'
import api from '../services/api';

export default function pageVaga() {
    const [vaga, setVaga] = useState([])

        useEffect(() => {
            api.get('/vaga').then((response )=> {
                setVaga(response.data)
            })
        }, [])
    
    return(
        <>
                <Header/>
                <View>
                <ScrollView>
                
                    {

                        vaga.map((itemVaga : Vaga) => {
                            return <CardVaga key={itemVaga.id} vaga={itemVaga}/>
                        })

                    }

                </ScrollView>
                </View>
        </>
    )
    
}

const styles = StyleSheet.create({
    
})


{/* <CardVaga 
nomeVaga ='PROGRAMADOR WEB JÚNIOR ' 
Empresa= 'MinoJob' 
faixaSalarialVaga = 'R$1.500,00'
cidade = 'Guarulhos'
UF = 'SP'
/> */}