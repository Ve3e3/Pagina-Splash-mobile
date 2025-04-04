import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './src/telas/Splash';
import { Home } from './src/telas/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  useEffect(() => {
    // Simula um tempo para a splash screen (ex.: 3 segundos)
    const timer = setTimeout(() => {
      setSplashComplete(true);
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);

  if (!splashComplete) {
    // Exibe a Splash enquanto o estado splashComplete for false
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}