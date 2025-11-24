
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Screen2NavigationProp, Screen2RouteProp } from '../navigation/types';

const Screen2 = () => {
  const navigation = useNavigation<Screen2NavigationProp>();
  const route = useRoute<Screen2RouteProp>();

  const { param1, param2 } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 2</Text>
      <Text>Param 1: {param1}</Text>
      <Text>Param 2: {param2}</Text>
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
    </View>
  );
};

export default Screen2;
