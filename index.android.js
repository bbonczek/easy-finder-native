import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import WelcomeScreen from './scripts/welcome_screen.js';

export default class easyFinderNative extends Component {
    render() {
        return (
          <View>
            <Text>easy-finder-native</Text>
            <WelcomeScreen />
          </View>
        );
    }
}

AppRegistry.registerComponent('easyFinderNative', () => easyFinderNative);
