import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, Text, Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import LampsView from './LampsView';

const LampsRoute = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="ASTRO Manager" subtitle="Lamps" />
    </Appbar.Header>
  );
};

const GroupsRoute = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="ASTRO Manager" subtitle="Groups" />
    </Appbar.Header>
  );
};

export default class BottomNavigationComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'lamps', title: 'Lamps', icon: 'white-balance-incandescent' },
      { key: 'groups', title: 'Groups', icon: 'group' }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    lamps: LampsView,
    groups: GroupsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
