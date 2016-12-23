import React, { Component } from 'react';
import { Text, View, Image, Button, TextInput, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

export default class WelcomeScreen extends Component {
  constructor(props){
    super(props);
    this.padlock = require('../imgs/padlock.png');
    this.lang = require('../langs/ENG.json');
    this.login = this.login.bind(this);
    this.state = { loginInputText: '' };
    this.state = { passwordInputText: '' };
    this.state = { debugLog: 'myTestLog' };
  }

  login(){
    let login = this.state.loginInputText;
    let password = this.state.passwordInputText;

    if(login == null || password == null || login == '' || password == ''){
      this.setState({debugLog: "L |& P is: null"});
      return;
    }

    let myMsg = "L: " + login + " P: " + password;
    this.setState({debugLog: myMsg});
    this.props.setScreen('map');
  }

  render() {
      return (
        <View style={styles.container}>
          <Image source={this.padlock} />
          <Text style={styles.text}> {this.lang.welcome.login_example} </Text>
          <TextInput
            style={styles.input}
            placeholder={this.lang.welcome.username}
            onChangeText={(loginInputText) => this.setState({loginInputText})}
            value={this.state.loginInputText}
          />
          <TextInput
            style={styles.input}
            placeholder={this.lang.welcome.password}
            onChangeText={(passwordInputText) => this.setState({passwordInputText})}
            value={this.state.passwordInputText}
          />
          <Button title="Log In" onPress={this.login}/>
          <TouchableHighlight style={styles.button} onPress={this.login}>
            <Text style={styles.buttonText}> Log In </Text>
          </TouchableHighlight>
          <Text> {this.state.debugLog} </Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0E0',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  input: {
    width: 200,
  },
  button: {
    backgroundColor: '#689DFF',
    width: 200,
    height: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontSize:24,
    color: 'white'
  }
});
