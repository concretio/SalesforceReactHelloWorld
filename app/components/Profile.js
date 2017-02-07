/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import {oauth, net} from 'react-native-force';
import UserList from './UserList';
import NewUser from './NewUser';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {authenticated: false};
  }
  componentDidMount() {
    var that = this;
      oauth.authenticate(
        function() {
            that.setState({authenticated:true});
        },
        function(error) {
            console.log('Failed to authenticate:' + error);
        }
      );
  }
  render() {
    if (!this.state.authenticated)
        return (<View/>); // Show splash screen if you have one
    var self = this;
    return (
      <NavigatorIOS
          ref="nav"
          style={styles.container}
          initialRoute={{
              title: 'Users',
              component: UserList,
              rightButtonTitle: '+',
              onRightButtonPress: () => {
                this.refs.nav.navigator.push({
                 title: "Create New User",
                 component: NewUser,
                 rightButtonTitle: 'Cancel',
                 onRightButtonPress: () => {this.refs.nav.navigator.pop();}
               });}
          }}

      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
    
  },
});
