import React from 'react';

import { Container, Title, Label, Input } from './styles';

const RecoveryPass: React.FC = () => {
  return (
    <Container>
      <Title>Change Password</Title>

      <Label>Current Password</Label>
      <Input />

      <Label>New Password</Label>
      <Input />

      <Label>Confirm new Password</Label>
      <Input />
    </Container>
  );
};

export default RecoveryPass;
