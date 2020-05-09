import styled from 'styled-components/native';
import { StyleSheet, StatusBar } from 'react-native';

export const Container = styled.View<any>`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: ${StatusBar.currentHeight}px 30px 0px;
`;

export const Welcome = styled.Text<any>`
  color: #22215b;
  margin-top: 35px;
  font-size: 20px;
`;

export const Title = styled.Text<any>`
  color: #22215b;
  font-size: 38px;
  font-weight: bold;
  margin-top: 20px;
`;

export const InfoText = styled.Text<any>`
  color: #7b7f9e;
  font-size: 14px;
  font-weight: 600;
  max-width: 223px;
  line-height: 23px;
  margin-top: 20px;
`;

export const ContainerButtons = styled.View<any>`
  margin-top: 25px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const SmartIdButton = styled.TouchableOpacity<any>`
  background-color: rgba(86, 125, 244, 0.2);
  height: 50px;
  width: 150px;
  border-radius: 10px;
  padding: 0 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SmartIdText = styled.Text<any>`
  color: #567df4;
  font-size: 16px;
`;

export const LoginButton = styled.TouchableOpacity<any>`
  background-color: #567df4;
  height: 50px;
  width: 150px;
  border-radius: 10px;
  padding: 0 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LoginText = styled.Text<any>`
  color: #ffffff;
  font-size: 16px;
`;

export const CreateAccoutButton = styled.TouchableOpacity<any>`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;

export const CreateAccountText = styled.Text<any>`
  color: #1b1d28;
  font-size: 16px;
`;

export const imageStyle = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
});
