import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import {
  PRODUCTS_SCREEN,
  COMMENTS_AND_SUGGESTIONS_SCREEN,
} from './src/constants';
import {Products, CommentsAndSuggestions, Home} from './src/Screens';
import './src/translations/i18n.config';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name={PRODUCTS_SCREEN} component={Products} />
        <Stack.Screen
          name={COMMENTS_AND_SUGGESTIONS_SCREEN}
          component={CommentsAndSuggestions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
