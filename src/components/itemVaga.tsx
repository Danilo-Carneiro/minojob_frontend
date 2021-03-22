import React, {useState} from 'react'
import {View, StyleSheet, Text, TouchableHighlight, Image, Dimensions,ScrollView} from 'react-native'
import Modal from 'react-native-modal'
import { useNavigation } from '@react-navigation/native'

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


export default function itemVaga(props:any) {

    const { navigate } = useNavigation();

    const [visible, setVisible] = useState(false)

    const toggleModal = () => {
        setVisible(!visible)
        }

    return (
        
        <>
        
            <View style={[
                styles.container, 
                {
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'flex-start',}]}>

                {/* Imagem lateral */}
                <View style={{marginTop: 10}}>

                    {!props.vaga.tx_avatar 
                    ?<Image 
                    style={[
                        styles.imgLogo, 
                        styles.borda]} 
                    source={{uri:'https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-2.png'}}/>
                    :<Image 
                    style={[
                        styles.imgLogo, 
                        styles.borda]} 
                    source={{uri:props.vaga.tx_avatar}}/>}

                    
                </View>
            
        
            <View style={[styles.card,{
                justifyContent: 'space-around',
            }]}>

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


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 5,
                }}>

                    <View style={[
                        styles.info, 
                        styles.borda,]}>
                        
                        <Text>
                        {`Salário: ${!props.vaga.tx_faixa_salarial 
                        ? 'Á combinar' 
                        : props.vaga.tx_faixa_salarial}`}
                        </Text>

                    </View>

                    <View style={[
                        styles.info, 
                        styles.borda,]}>

                        <Text style={styles.bold}>
                            {`${props.vaga.cidade} - ${props.vaga.uf}`}
                        </Text>

                    </View>


                </View>
                        <TouchableHighlight style={[
                            styles.btnDetalhes, 
                            styles.alinhar, 
                            styles.borda]} onPress={toggleModal}>
                            <Text style={[styles.titleBtn, styles.bold]}>Detalhes</Text>
                        </TouchableHighlight>
                
            </View>
            
        </View>
        
        
        <Modal
        isVisible={visible}
        backdropColor={'#000'}
        style={[styles.modalStyles, styles.borda,{
            justifyContent: 'space-between',
            alignItems:'center',
            }]}>
            
            <View style={{width: '100%', padding: 10}}>
            
                <View style={[
                    styles.areaTit, 
                    styles.bgPadrao, 
                    styles.borda,]}>
                    {/* Titulo da Vaga */}
                    <Text style={[styles.titleVaga]}>
                        {`${props.vaga.tx_nome}`}
                    </Text>


                    <TouchableHighlight
                    onPress={() => {setVisible(false)
                        setTimeout(function(){navigate("EmpresaPage")}, 250)
                        }}>

                        <Text style={[
                            styles.titleEmpresa, 
                            styles.titleBtn, 
                            styles.bold]}>
                            {`${props.vaga.empresa.tx_nome}  /  ${props.vaga.cidade} - ${props.vaga.uf}`}
                        </Text> 
                    </TouchableHighlight>
                </View>

                {/* DETALHES */}
                <View style={[styles.areaDetail]}>
                    <Text style={[
                        styles.bold, {fontSize: 15}]}>
                            Detalhes:
                    </Text>
                    <ScrollView style={{height: 200}}>
                        <Text >
                        {`${props.vaga.tx_detalhes}`}
                        </Text>
                    </ScrollView>
                </View>
                
                {/* SALARIO E LOCAL */}
                <View style={[{
                    flexDirection: 'row', 
                    justifyContent: 'space-between',}
                    ]}>
                    <Text style={[
                        styles.borda, 
                        styles.alinhar, 
                        styles.bold,
                        
                         {
                        width: '45%',
                        height: 40,
                        padding: 10,
                        backgroundColor: '#ebebeb',
                        
                        }]}>
                        {!props.vaga.tx_faixa_salarial 
                        ? 'Á combinar' 
                        : `R$ ${props.vaga.tx_faixa_salarial}`}

                    </Text>

                    <Text style={[
                        styles.borda, 
                        styles.alinhar, 
                        styles.bold,
                        {
                        width: '45%',
                        height: 40,
                        padding: 10,
                        backgroundColor: '#ebebeb',
                        }]}>

                        {`(11) ${props.vaga.empresa.telefone}`}

                        </Text>

                        
                </View>
                {/* INFORMAÇÕES DA EMPRESA */}
                <View style={[
                    styles.btnEmail,
                    styles.bgPadrao,
                    styles.borda,
                     {
                         marginVertical: 15
                     }
                ]}>
                    
                    <Text style={[
                        styles.bgPadrao, 
                        styles.titleBtn,
                        styles.alinhar,
                        styles.bold
                    ]}>
                    {`${props.vaga.bairro} - ${props.vaga.cidade} / ${props.vaga.uf}`}
                    </Text>
                </View>

                

                {/* EMAIL PARA CONTATO */}
                <View style={[
                    styles.btnEmail,
                    styles.bgPadrao,
                    styles.borda,
                ]}>
                    <Text style={[
                        styles.titleBtn,
                        styles.bold
                        ]}>
                            {`${props.vaga.empresa.email_contato}`}
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    marginTop: '15%'}}>

                <TouchableHighlight
                onPress={() => alert('SE CANDIDATOU')}
                style={[
                    styles.btnModal, 
                    styles.alinhar, 
                    styles.borda,{
                    backgroundColor: '#57B894',
                    width: 200,
                    }]}>

                    <Text style={[styles.titleBtn, styles.bold]}>CANDIDATAR-SE</Text>

                </TouchableHighlight>

                <TouchableHighlight
                onPress={toggleModal}
                style={[
                    styles.btnModal, 
                    styles.alinhar, 
                    styles.borda,
                    ]}>

                    <Text style={[styles.titleBtn, styles.bold, ]}>FECHAR</Text>

                </TouchableHighlight>

            </View>
            </View>
            
            {/* Botões Cadastro e Fechar */}
            
        </Modal>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingBottom: 20
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
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        width: '80%',
        height: 150,
        
    },
    imgLogo: {
        width: 50,
        height: 50,
        
    },
    info: {
        backgroundColor: '#ebebeb',
        borderColor: 'white',
        borderWidth: 1
    },
    modalStyles: {
        backgroundColor: 'white',
        paddingVertical: 25,
        
    },
    btnDetalhes: {
        width: '100%',
        height: '25%',
        backgroundColor: '#57B894',
    },
    btnModal: {
        width: 100,
        height: 50,
        backgroundColor: 'red',
    },
    titleBtn: {
        color: 'white',
        fontSize: 16
    },
    areaTit: {
        padding: 10
    },
    areaDetail: {
        width: '95%',
        marginBottom: 25,
        padding: 10,
        marginTop: 30
    },
    bgPadrao: {
        backgroundColor: '#57B894',
    },
    alinhar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bold: {
        fontWeight: 'bold'
    },
    btnInfos: {
        backgroundColor: '#ebebeb',
        width: '45%',
    },
    borda: {
        borderRadius: 8,
    },
    btnEmail: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },

    
})