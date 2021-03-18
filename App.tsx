import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'

import Routes from './src/routes/routes'


export default function App() {
  return (
    <>
        {/* <Header/> */}
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
