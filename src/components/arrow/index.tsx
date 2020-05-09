import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';
import { ArrowProps } from './arrow.props';

const Arrow: FC<ArrowProps> = ({ goBack }) => {
  return (
    <Container onPress={goBack}>
      <Icon name="keyboard-arrow-left" color="#22215B" size={32} />
    </Container>
  );
};

export default Arrow;
