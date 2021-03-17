import React from 'react'

import {StyleSheet, Text, View} from 'react-native'

export default function User() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                PAGE USER
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#000',
        fontSize: 30
    
    }
})