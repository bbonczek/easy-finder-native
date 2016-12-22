import React, { Component } from 'react';
import { Text, View, Image, Button, TextInput, StyleSheet } from 'react-native';

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
          <Text> {this.lang.welcome.login_example} </Text>
          <TextInput
            placeholder={this.lang.welcome.username}
            onChangeText={(loginInputText) => this.setState({loginInputText})}
            value={this.state.loginInputText}
          />
          <TextInput
            placeholder={this.lang.welcome.password}
            onChangeText={(passwordInputText) => this.setState({passwordInputText})}
            value={this.state.passwordInputText}
          />
          <Button title="Log In" onPress={this.login}/>
          <Text> {this.state.debugLog} </Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});
