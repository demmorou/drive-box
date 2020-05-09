import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';

const App: FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor="transparent"
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
