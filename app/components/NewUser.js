'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
class NewUser extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Name</FormLabel>
        <FormInput/> 
        <FormLabel>Email</FormLabel>
        <FormInput/> 
        <Button
          backgroundColor='#03A9F4'
          title='CREATE'
          style={styles.button}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:60
  },
  button: {
    marginTop:60
  }
});


export default NewUser;