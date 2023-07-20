import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NativeBaseProvider } from 'native-base';
// import { Home } from './src/pages/Home/Home';
import constants from './src/global/styles/constants';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import {
  Lexend_700Bold,
  Lexend_600SemiBold,
  Lexend_500Medium,
  Lexend_400Regular,
} from '@expo-google-fonts/lexend';
import { RubikMonoOne_400Regular } from '@expo-google-fonts/rubik-mono-one';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';

const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BebasNeue_400Regular,
    RubikMonoOne_400Regular,
    Lexend_700Bold,
    Lexend_600SemiBold,
    Lexend_500Medium,
    Lexend_400Regular,
  });

  if (!fontsLoaded) {
    return AppLoading;
  }

  return (
    <NativeBaseProvider>
      <ThemeProvider theme={constants}>
        <Routes />
      </ThemeProvider>
    </NativeBaseProvider>
  );
};

export default App;
