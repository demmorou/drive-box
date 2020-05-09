/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Title,
  InputSearch,
  ViewInput,
  Folder,
  icon,
  FlatListStyle,
} from './styles';

import { DataFolders } from './data';

const menu = require('../../assets/menu.png');

const Home: FC = () => {
  const renderItems = ({ item }: any) => {
    return (
      <Folder style={{ backgroundColor: item.background, borderRadius: 20 }}>
        <Image source={item.image} />
      </Folder>
    );
  };

  return (
    <Container>
      <Header>
        <Title>Your Dirbbox</Title>

        <Image source={menu} />
      </Header>

      <ViewInput>
        <Icon style={icon.icon} name="search" size={30} color="#22215b" />
        <InputSearch
          placeholderTextColor="#22215b"
          placeholder="Search folder"
        />
      </ViewInput>

      <FlatList
        style={FlatListStyle.root}
        data={DataFolders}
        renderItem={renderItems}
        keyExtractor={(item) => item.title}
        numColumns={2}
        horizontal={false}
        columnWrapperStyle={FlatListStyle.columnWrapper}
      />
    </Container>
  );
};

export default Home;
