/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
      Platform, 
      StyleSheet, 
      Text, 
      View      
      } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Criando aplicativo,\n' +
    'Agenda de contatos,\n' +
    'Criar ainda banco de dados',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Primeiro aplicativo com java script!</Text>
        <Text style={styles.instructions}>Testando performance</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    backgroundColor: '#CCFFFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
