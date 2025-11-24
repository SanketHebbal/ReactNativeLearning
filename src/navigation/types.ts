
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Screen1: undefined;
  Screen2: { param1: string; param2: number };
};

export type Screen1NavigationProp = StackNavigationProp<
  RootStackParamList,
  'Screen1'
>;

export type Screen2NavigationProp = StackNavigationProp<
  RootStackParamList,
  'Screen2'
>;

export type Screen2RouteProp = RouteProp<RootStackParamList, 'Screen2'>;
