import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Vaga from './src/pages/PageVaga'
import Routes from './src/routes/routes'


export default function App() {
  return (
    <>
       <Routes/> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
