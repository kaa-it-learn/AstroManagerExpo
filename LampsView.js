import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const ListRoute = () => (
  <View style={[{ flex: 1 }, { backgroundColor: '#ff4081' }]} />
);

const MapRoute = () => (
  <View style={[{ flex: 1 }, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const getTabBarIcon = (props) => {

  console.log(props);

  const { route, focused } = props

  if (route.key === 'list') {

    return (<Ionicons name='ios-list' size={20} color={focused ? 'white' : 'lightgrey'} />);

  } else {

    return (<Ionicons name='md-map' size={20} color={focused ? 'white' : 'lightgrey'} />);

  }
}

export default function LampsView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'list', title: 'list' },
    { key: "map", title: 'map' },
  ]);

  const renderScene = SceneMap({
    list: ListRoute,
    map: MapRoute,
  });

  return (
    <View style={[{ flex: 1 }]}>
      <Appbar.Header>
        <Appbar.Content title="ASTRO Manager" subtitle="Lamps" />
      </Appbar.Header>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'yellow' }}
            renderIcon={props => getTabBarIcon(props)}
            labelStyle={styles.noLabel}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  noLabel: {
    display: 'none',
    height: 0
  }
})