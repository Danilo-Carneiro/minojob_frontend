import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal'

import {
    StyleSheet, 
    Text, 
    View, 
    TouchableHighlight, 
    Image,
    TextInput,
    } from 'react-native'


import { useNavigation } from '@react-navigation/native'


export default function Home() {

    const [visible, setVisible] = useState(false)
    const toggleModal = () => {
        setVisible(!visible)
    }

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
                Clique aqui e faça seu Login
            </Text>

            <TouchableHighlight
            onPress={toggleModal}
            underlayColor="#3C9071"
            style={[styles.btnUp]}>
                <Icon 
                name="chevron-up" 
                size={50} 
                color="#fff" 
                />
            </TouchableHighlight>
            

            <Modal 
            isVisible={visible}
            backdropOpacity={0.1}
            style={{backgroundColor: '#fff', borderRadius: 8}}
            >
                    <TouchableHighlight
                    onPress={toggleModal}
                    underlayColor="#3C9071"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginTop:'5%'
                    }}>
                        <Icon 
                        name="chevron-down" 
                        size={50} 
                        color="#fff" 
                        />
                    </TouchableHighlight>
                <View style={styles.containerModal}>



                    <Image style={{width: 150,
                    height: 150}}
                    source={require('../../assets/mino-quadrado.png')}/>
                    <View style={{
                        justifyContent: 'center', 
                        alignItems:'center',
                        flexDirection: 'column',
                        width: '100%',
                        height: '60%'}}>
                        
                        <Text style={{
                            color: 'white', 
                            fontWeight: 'bold'}}>E-mail</Text>
                        <TextInput 
                        style={[styles.btnInput]}
                        placeholder='E-MAIL'>
                        </TextInput>

                        <Text style={{
                            color: 'white', 
                            fontWeight: 'bold',}}>Senha</Text>
                        <TextInput 
                        style={[styles.btnInput]}
                        secureTextEntry={true}
                        placeholder='SENHA'>
                        </TextInput>


                        <TouchableHighlight
                        style={styles.btnLogin}
                        onPress={() => {setVisible(false)
                            setTimeout(() => {
                                navigate("VagaPage")
                            }, 250);
                            }}>
                            <Text>
                                LOGAR
                            </Text>
                        </TouchableHighlight>
                    </View>

                    
                </View>
            </Modal>

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
    btnLogin: {
        width: 200,
        height: 50,
        backgroundColor: '#57B894',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
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
    btnInput: {
        width: '50%',
        height: 40,
        backgroundColor: 'white',
        color: '#000',
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 7

    },
    containerModal: {
        height: '100%',
        width: '100%',
        alignItems:'center',
        justifyContent: 'center'
    }
})
