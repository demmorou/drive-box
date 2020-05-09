import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 70px 35px 0;
`;

export const Title = styled.Text`
  color: #22215b;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.3px;
`;

export const Header = styled.View<any>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputSearch = styled.TextInput`
  height: 55px;
  color: #333;
  width: 100%;
  font-size: 16px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 5px 15px 5px 50px;
`;

export const ViewInput = styled.View`
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: 35px;
`;

export const Options = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Folder = styled.View`
  width: 148px;
  height: 107px;
  border-radius: 20px;
  padding: 15px;
`;

export const HeaderFolder = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleFolder = styled.Text`
  font-size: 15px;
  margin-top: 10px;
  font-weight: 600;
`;

export const Data = styled.Text`
  font-size: 10px;
  margin-top: 3px;
`;

export const MoreButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const icon = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 12,
    left: 10,
  },
});

export const FlatListStyle = StyleSheet.create({
  root: {
    width: '100%',
    padding: 0,
    marginTop: 25,
  },
  columnWrapper: {
    marginTop: 25,
    justifyContent: 'space-between',
  },
});
