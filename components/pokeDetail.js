import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Text,
   Spinner, Content, Card, CardItem, Body
  } from 'native-base';
import { Image, StyleSheet, Alert } from 'react-native';

export default class PokeDetail extends Component {

  render() {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text>Picachu</Text>
            <Text note>Pokemon</Text>
          </Body>
        </CardItem>
        <CardItem cardbody>
          <Image style={styles.pic} source={require('../img/picachu.png')} />
        </CardItem>
      <CardItem>
        <Body>
          <Text>Power</Text>
          <Text note>Electricity</Text>
        </Body>
      </CardItem>
      </Card>
    );
  }
}

var styles = StyleSheet.create(
  {
    pic: {
      height: 200,
      width: 200,
      alignSelf: 'center',
    }
  }
)
