import styled from 'styled-components/native';

export const Container = styled.View<any>`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 30px;
`;

export const Title = styled.Text<any>`
  color: #1b1d28;
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
`;

export const Label = styled.Text<any>`
  color: #1b1d28;
  font-size: 16px;
  margin-top: 25px;
`;

export const Input = styled.TextInput<any>`
  border: 1px solid #eef2fe;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  font-size: 16px;
  color: #dddddd;
`;
