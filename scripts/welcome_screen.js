import React, { Component } from 'react';
import {Text, View, Image, Button, TextInput } from 'react-native';

export default class WelcomeScreen extends Component {
  constructor(props){
    super(props);
    this.padlock = require('../imgs/padlock.png');
    this.lang = require('../langs/ENG.json');
  }
    render() {
        return (
          <View>
            <Text>{this.lang.welcome.login_example}</Text>
            <Image source = {this.padlock} />
            <TextInput placeholder = {this.lang.welcome.username} />
            <TextInput placeholder = {this.lang.welcome.password} />
            <Button title="Log In" />
          </View>
        );
    }
}
