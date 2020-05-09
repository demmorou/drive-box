import React, { FC, useState } from 'react';
import { NavigationSwitchScreenProps } from 'react-navigation';
import {
  Container,
  Text,
  Input,
  Label,
  LoginButton,
  LoginText,
  ForgetPasswordButton,
  ForgetPasswordText,
} from './styles';
import { useAuth } from '../../contexts/auth';

import Arrow from '../../components/arrow';

type Props = NavigationSwitchScreenProps & {};

const Login: FC<Props> = ({ navigation }) => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email.length >= 6 && password.length >= 6) {
      signIn(email);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Arrow goBack={goBack} />

      <Text>Sign in</Text>

      <Label>E-mail</Label>
      <Input onChangeText={setEmail} />

      <Label>Password</Label>
      <Input onChangeText={setPassword} />

      <LoginButton onPress={handleSignIn}>
        <LoginText>Sign in</LoginText>
      </LoginButton>

      <ForgetPasswordButton>
        <ForgetPasswordText>Forget my password</ForgetPasswordText>
      </ForgetPasswordButton>
    </Container>
  );
};

export default Login;
