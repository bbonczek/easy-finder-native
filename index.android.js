import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import WelcomeScreen from './scripts/welcome_screen.js';

export default class easyFinderNative extends Component {
    render() {
        return (
          <View>
            <WelcomeScreen />
          </View>
        );
    }
}

AppRegistry.registerComponent('easyFinderNative', () => easyFinderNative);
