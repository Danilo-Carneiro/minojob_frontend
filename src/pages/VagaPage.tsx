import React, {useEffect, useState} from 'react';
import {
    View, 
    StyleSheet, 
    ScrollView, 
    TextInput, 
    Dimensions,
    Text} from 'react-native'
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
                console.log("Lista Carregada")
            })
        }, [])
    
    return(
        <>
                <Header/>

                <View style={{flexDirection:'row',
                            justifyContent:'center',
                            paddingHorizontal: 20,
                            backgroundColor: '#ebebeb'
                            }}>
                    <TextInput 
                    placeholder='Pesquisar'
                    style={styles.pesquisa}
                    />
                    <TouchableHighlight
                    underlayColor="#999"
                    onPress={() => alert('Pesquisar')}
                    style={styles.btnPesquisa}>
                        <Text >
                            <Icon 
                            name="search" 
                            size={30} 
                            color="#000" 
                            />
                        </Text>
                    </TouchableHighlight>
                        
                </View>
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
        height: Dimensions.get('window').height-170,
        marginBottom: 60,
    },
    pesquisa: {
        width: '90%',
        height: 50,
        backgroundColor: '#ebebeb',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8
    },
    btnPesquisa: {
        width: 75,
        height: 50,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
})
