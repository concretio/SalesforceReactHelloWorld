'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ListView,
  Text,
  PixelRatio
} from 'react-native';

import {oauth, net} from 'react-native-force';

class UserList extends Component {
  constructor(props) {
    super(props);
  

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {dataSource: ds.cloneWithRows([])};

  }
  componentDidMount() {
    var that = this;
    var soql = 'SELECT Id, Name FROM User LIMIT 10';
    net.query(soql,
              function(response) {
                  var users = response.records;
                  var data = [];
                  for (var i in users) {
                      data.push(users[i]["Name"]);
                  }

                  that.setState({
                      dataSource: that.getDataSource(data),
                  });

              });
    }
    getDataSource(users: Array<any>): ListViewDataSource {
        return this.state.dataSource.cloneWithRows(users);
    }
  render() {
    return (
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            enableEmptySections={true}
          />
    );
  }
  renderRow(rowData: Object) {
        return (
                <View>
                    <View style={styles.row}>
                      <Text numberOfLines={1}>
                       {rowData}
                      </Text>
                    </View>
                    <View style={styles.cellBorder} />
                </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height: 50,
        alignItems:'center'
    },
    row: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 16,
    },
    cellBorder: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        // Trick to get the thinest line the device can display
        height: 1 / PixelRatio.get(),
        marginLeft: 4,
    },
});


export default UserList;