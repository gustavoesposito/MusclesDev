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
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';

const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
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
