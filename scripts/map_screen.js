import React, { Component } from 'react';
import { Text, View, Image, Button, TextInput, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');

export default class MapScreen extends Component {
  constructor(props){
    super(props);
    this.lang = require('../langs/ENG.json');

    this.rosImgs = [];
    let radius = 100;
    let angle = 0;
    let amount = 5;

    let x = (width/2)+radius*Math.cos(angle * (Math.PI / 180));
    let y = (height/2)+radius*Math.sin(angle * (Math.PI / 180));
    this.rosImgs.push({img: require('../imgs/ros_eat.png'), id: 1,x:x,y:y});
    angle += 360/amount;

    x = (width/2)+radius*Math.cos(angle * (Math.PI / 180));
    y = (height/2)+radius*Math.sin(angle * (Math.PI / 180));
    this.rosImgs.push({img: require('../imgs/ros_party.png'), id: 2,x:x,y:y});
    angle += 360/amount;

    x = (width/2)+radius*Math.cos(angle * (Math.PI / 180));
    y = (height/2)+radius*Math.sin(angle * (Math.PI / 180));
    this.rosImgs.push({img: require('../imgs/ros_sleep.png'), id: 3,x:x,y:y});
    angle += 360/amount;

    x = (width/2)+radius*Math.cos(angle * (Math.PI / 180));
    y = (height/2)+radius*Math.sin(angle * (Math.PI / 180));
    this.rosImgs.push({img: require('../imgs/ros_party.png'), id: 4,x:x,y:y});
    angle += 360/amount;

    x = (width/2)+radius*Math.cos(angle * (Math.PI / 180));
    y = (height/2)+radius*Math.sin(angle * (Math.PI / 180));
    this.rosImgs.push({img: require('../imgs/ros_sleep.png'), id: 5,x:x,y:y});
    angle += 360/amount;

    this.state = {info: 'info'};

    this.imgClick = this.imgClick.bind(this);
    this.getRosette = this.getRosette.bind(this);
  }

  imgClick(){
    this.setState({info: "Clicked!"});
  }

  getRosette(){
    return this.rosImgs.map((obj) =>
      <TouchableHighlight key={obj.id} onPress={() => this.imgClick()}
        style={styles['imgCont']={
         position: 'absolute',
         width: width * 0.20,
         height: width * 0.20,
         left: obj.x,
         top: obj.y,}}>
        <Image
          style={styles['image'+obj.id]={width: width * 0.20, height: width * 0.20,}}
          source={obj.img}
        />
      </TouchableHighlight>
    );
  }

  render() {
      return (
        <View style={styles.container}>
          {this.getRosette()}


          <Text onPress={this.imgClick} > Screen with a map {this.state.info} </Text>

        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0E0',
  },

});

// image: {
//    position: 'absolute',
//    width: width * 0.20,
//    height: width * 0.20,
//    left: width/2,
//    top: height/2,
// },im: {
//    width: width * 0.20,
//    height: width * 0.20,
// },
// image2: {
//    position: 'absolute',
//    left: 110,
//    top: 110,
// }
