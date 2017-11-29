// Import a library to help create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create component
const App = () => (
    <Header />

);
// Render it to the device
AppRegistry.registerComponent('musicalbums', () => App);
