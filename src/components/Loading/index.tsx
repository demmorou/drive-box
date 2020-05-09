import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

const Indicator: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator color="#567df4" size="large" />
    </Container>
  );
};

export default Indicator;
