import React from 'react'
import {View, StyleSheet} from 'react-native'

import Header from '../components/Header'
import CardVaga from '../components/CardVaga'

export default function Vaga() {
    
    return(
        <>
        <Header/>
        <View>

            <CardVaga 
            nomeVaga ='PROGRAMADOR WEB JÚNIOR ' 
            Empresa= 'MinoJob' 
            faixaSalarialVaga = 'R$1.500,00'
            cidade = 'Guarulhos'
            UF = 'SP'
            />
            <CardVaga 
            nomeVaga ='ESTÁGIO MOBILE / REACT NATIVE ' 
            Empresa= 'Facebook Inc.' 
            faixaSalarialVaga = 'R$2.000,00'
            cidade = 'São Paulo'
            UF = 'BH'
            />
            <CardVaga 
            nomeVaga ='PROGRAMADOR JAVA SÊNIOR' 
            Empresa= 'Apple Enterprise' 
            faixaSalarialVaga = 'R$15.000,00'
            cidade = 'Santos'
            UF = 'RJ'
            />
            
        </View>
        </>
    )
    
}

const styles = StyleSheet.create({

})