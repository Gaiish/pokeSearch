import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Text, Spinner, Content } from 'native-base';
import { Image, StyleSheet, Alert } from 'react-native';
import PokeDetail from './components/pokeDetail';

export default class PokeSearch extends Component {

  state = {
    name:'',
    spinner: false
  };

  search() {
    //Alert.alert('alerted')
    this.setState({spinner: true})
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded >
          <Item>
            <Icon name='ios-search' />
            <Input placeholder="search pokemon by egg group"
              onChangeText={(name) => this.setState({name})}
              onSubmitEditing={this.search.bind(this)}
            />
          </Item>
        </Header>
        <Content>
          {(this.state.spinner)?

            (<Spinner color="blue" />):

            (
              <PokeDetail />
            )
          }
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create(
  {
    pic: {
      height: 200,
      width: 200,
      alignSelf: 'center',
      marginTop: 100
    }
  }
)

//<Image style={styles.pic} source={require("./img/picachu.png")} />
