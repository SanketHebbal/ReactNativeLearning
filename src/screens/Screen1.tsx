
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Screen1NavigationProp } from '../navigation/types';

const Screen1 = () => {
  const navigation = useNavigation<Screen1NavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 1</Text>
      <Button
        title="Go to Screen 2"
        onPress={() =>
          navigation.navigate('Screen2', {
            param1: 'Hello from Screen 1',
            param2: 123,
          })
        }
      />
    </View>
  );
};

export default Screen1;
