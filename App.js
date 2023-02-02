import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {
  return (
    <ShopNavigator/>
  );
};