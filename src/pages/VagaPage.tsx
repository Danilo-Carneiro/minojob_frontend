import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, TextInput, Dimensions} from 'react-native'
import CardVaga, {Vaga} from '../components/itemVaga'
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../services/api';
import Header from '../components/Header'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function VagaPage() {
    const [vaga, setVaga] = useState([])

        useEffect(() => {
            api.get('/vaga').then((response )=> {
                setVaga(response.data)
            })
        }, [])
    
    return(
        <>
                <Header/>
               
                <View style={styles.container}>
                    <ScrollView style={{height: '100%'}}>

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
    container: {
        height: Dimensions.get('window').height-100
    }
})
