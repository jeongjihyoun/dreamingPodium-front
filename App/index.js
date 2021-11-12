import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from './navigation/MainStack';
import LoginScreen from './screens/Auth/LoginScreen';
import DreamStack from './navigation/DreamStack';

import {Provider, useDispatch, useSelector} from 'react-redux';
import {postingReducer} from './reducer/postingSlice';
import store from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const StackApp = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackApp.Navigator presentation="modal">
            <StackApp.Screen
              name="Login"
              component={LoginScreen}
              options={navOptionHandler}
            />
            <StackApp.Screen
              name="dream"
              component={DreamStack}
              options={navOptionHandler}
            />
            <StackApp.Screen
              name="HomeApp"
              component={MainStack}
              options={navOptionHandler}
            />
          </StackApp.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
