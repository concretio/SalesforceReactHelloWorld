import React, {Component} from 'react';
import {Text} from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements'
import Feed from './Feed';
import Profile from './Profile';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      selectedTab: 'profile',
    }
  }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  render() {
    const { selectedTab } = this.state

    return (
      <Tabs>
        <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selected={selectedTab === 'feed'}
          title={'feed' === 'feed' ? 'FEED' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
          onPress={() => this.changeTab('feed')}>
          <Feed />
        </Tab>
        <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selected={selectedTab === 'profile'}
          title={'profile' === 'profile' ? 'USERS' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
          onPress={() => this.changeTab('profile')}>
          <Profile />
        </Tab>
      </Tabs>
    );
  }
}
