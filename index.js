// Import a library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create component
const App = () => (
  <View>
      <Header headerText={'Albums'} />
      <AlbumList />
  </View>


);
// Render it to the device
AppRegistry.registerComponent('musicalbums', () => App);
