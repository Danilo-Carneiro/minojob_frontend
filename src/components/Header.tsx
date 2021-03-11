import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';


export default function Header() {
    return ( 
    <View style={styles.container}> 
    <Image 
    style={styles.logoHeader} 
    source={require('../../assets/mino.png')}/>
    </View>)
   
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: Dimensions.get('window').height / 13,
      backgroundColor: '#57B894',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoHeader: {
        width: 160,
        height: 40
    }
  });