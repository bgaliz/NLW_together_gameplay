import React from 'react';
import { StatusBar } from 'react-native'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import  { useFonts } from 'expo-font'

import { Background } from './src/shared/components/Background'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar 
          barStyle="light-content" //Coloca cor nos itens do statusBar
          backgroundColor="transparent" //Deixa-os transparente, de certa forma deixando os ícones e o statusBar na cor branca
          translucent // preenche o espaço que foi liberado acima do celular.
      ></StatusBar>
      <Routes />
    </Background>
  );
}
