import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Slot } from 'expo-router';
import { lightTheme, darkTheme } from './src/styles/theme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={theme}>
        <Slot />
      </PaperProvider>
    </ThemeProvider>
  );
}
