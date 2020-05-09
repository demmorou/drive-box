import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Components
 */
import Home from '../pages/home';

const AppStack = createStackNavigator();

const AppRoutes: FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
