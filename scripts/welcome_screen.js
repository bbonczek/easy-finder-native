import React, { Component } from 'react';
import {Text, View, Image, Button, TextInput } from 'react-native';

export default class WelcomeScreen extends Component {
  constructor(props){
    super(props);
    this.padlock = require('../imgs/padlock.png');
  }
    render() {
        return (
          <View>
            <Text>Login Example</Text>
            <Image source = {this.padlock} />
            <TextInput placeholder="Username" />
            <TextInput placeholder="Password" />
            <Button title="Log In" />
          </View>
        );
    }
}
