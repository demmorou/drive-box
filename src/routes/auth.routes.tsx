import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Components
 */
import Intro from '../pages/intro';
import Login from '../pages/login';

const AuthStack = createStackNavigator();

const AuthRoutes: FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Intro"
      component={Intro}
      options={{ headerShown: false }}
    />

    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
