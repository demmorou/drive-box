import React, { FC } from 'react';
import { Image } from 'react-native';
import { NavigationSwitchScreenProps } from 'react-navigation';

import {
  Container,
  imageStyle,
  Welcome,
  Title,
  InfoText,
  ContainerButtons,
  LoginButton,
  SmartIdButton,
  CreateAccoutButton,
  CreateAccountText,
  SmartIdText,
  LoginText,
} from './styles';
const cloud = require('../../assets/cloud.png');
const touch = require('../../assets/touch.png');
const arrow = require('../../assets/arrow.png');

type Props = NavigationSwitchScreenProps & {};

const Intro: FC<Props> = ({ navigation }) => {
  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Container>
      <Image style={imageStyle.image} source={cloud} />

      <Welcome>Welcome to</Welcome>
      <Title>Dirbbox</Title>
      <InfoText>
        Best cloud storage platform for all business and individuals to manage
        there data.
      </InfoText>

      <ContainerButtons>
        <SmartIdButton>
          <Image source={touch} />
          <SmartIdText>Smart Id</SmartIdText>
        </SmartIdButton>

        <LoginButton onPress={navigateLogin}>
          <LoginText>Sign in</LoginText>
          <Image source={arrow} />
        </LoginButton>
      </ContainerButtons>

      <CreateAccoutButton>
        <CreateAccountText>Create account</CreateAccountText>
      </CreateAccoutButton>
    </Container>
  );
};

export default Intro;
