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
  HeaderFolder,
  MoreButton,
  TitleFolder,
  Data,
} from './styles';

import { DataFolders } from './data';

const menu = require('../../assets/menu.png');

const Home: FC = () => {
  const renderItems = ({ item }: any) => {
    return (
      <Folder style={{ backgroundColor: item.background, borderRadius: 20 }}>
        <HeaderFolder>
          <Image source={item.image} />

          <MoreButton>
            <Icon name="more-vert" size={24} color={item.colorIcon} />
          </MoreButton>
        </HeaderFolder>

        <TitleFolder style={{ color: item.textColor }}>
          {item.title}
        </TitleFolder>
        <Data style={{ color: item.textColor }}>{item.date}</Data>
      </Folder>
    );
  };

  return (
    <Container>
      <Header>
        <Title>Your Drive-box</Title>

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
        showsVerticalScrollIndicator={false}
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
