import { StyleSheet, View } from 'react-native';
  import React from 'react';
  import LegalNLP from './src';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import SummaryScreen from './SummaryScreen';

  const Stack = createStackNavigator();

  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={LegalNLP} options={{ headerShown: false }} />
          <Stack.Screen name="SummaryScreen" component={SummaryScreen} options={{ title: 'Summarized Text' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
  });

