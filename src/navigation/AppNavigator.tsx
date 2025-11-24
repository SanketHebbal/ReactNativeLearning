import React, { useEffect } from 'react';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  useEffect(() => {
    // This import is dynamic to avoid SSR/metro issues if needed:
    const { Linking } = require('react-native');

    const handleUrl = ({ url }: { url: string }) => {
      if (!url) return;
      console.log('Handling URL: ', url);
    };

    const sub = Linking.addEventListener('url', handleUrl);

    // handle cold-start link
    (async () => {
      const initial = await Linking.getInitialURL();
      if (initial) handleUrl({ url: initial });
    })();

    return () => sub.remove();
  }, []);

  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        Screen1: 'Screen1',
        Screen2: 'Screen2/:param1/:param2',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
