// import Header from '@src/components/Atoms/Header';
import Header from 'components/Atoms/Header';
// import LottieUfo from 'components/Atoms/LottieUfo';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { poke as pokeApi } from 'service/api';



export default function App() {
  const [isSplash, setIsSplash] =       useState(true);
  useEffect(() => {
         setTimeout(() => {
      setIsSplash(false)
    },2000)
  },[])
  useEffect(() => {
    pokeApi.test1();
  },[])
  
  return (
    <View style={styles.container}>
      {/* {isSplash && <LottieUfo />} */}
      {
        !isSplash && 
        <React.Fragment>
          <Header />
          <Text>Open up App.tsx to start working on your app!</Text>
        </React.Fragment>
      }
      <StatusBar style="auto" />
    </View>
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
