import styled from 'styled-components/native';

export const Container = styled.View<any>`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 30px 0;
  position: relative;
`;

export const Text = styled.Text<any>`
  color: #1b1d28;
  font-size: 30px;
  font-weight: bold;
  margin-top: 60px;
`;

export const Label = styled.Text<any>`
  color: #1b1d28;
  font-size: 16px;
  margin-top: 25px;
`;

export const Input = styled.TextInput`
  border: 1px solid #eef2fe;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  font-size: 16px;
  color: #333333;
  margin-top: 5px;
  padding: 5px 10px;
`;

export const LoginButton = styled.TouchableOpacity<any>`
  background-color: #567df4;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  padding: 0 25px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const LoginText = styled.Text<any>`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

export const ForgetPasswordButton = styled.TouchableOpacity<any>`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;

export const ForgetPasswordText = styled.Text<any>`
  color: #1b1d28;
  font-size: 16px;
`;
