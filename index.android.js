import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import WelcomeScreen from './scripts/welcome_screen.js';
import MapScreen from './scripts/map_screen.js';

export default class easyFinderNative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'welcome'
    }
  }

  selectScreen = (screen) => {
    this.setState({screen: screen});
  }

  render() {
    // if(this.state.screen === 'welcome'){
    //   return (
    //     <View style={styles.container}>
    //       <WelcomeScreen setScreen={this.selectScreen} />
    //     </View>
    //   );
    // }
    // else if(this.state.screen === 'map'){
      return(
        <View style={styles.container2}>
          <MapScreen />
        </View>
      );
//    }
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
  container2: {
    flex: 1,
  }
});

AppRegistry.registerComponent('easyFinderNative', () => easyFinderNative);
