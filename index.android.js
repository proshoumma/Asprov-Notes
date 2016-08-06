import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import * as storage from 'redux-storage'
import {
  Text,
  View,
  Navigator,
  BackAndroid,
  AppRegistry
} from 'react-native'

import AllNotes from './app/components/view_allNotes'

import ApplicationStore from './app/reducers'
const reducer = storage.reducer(ApplicationStore);

import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
const engine = createEngine('notes-app-store')

const middleware = storage.createMiddleware(engine)
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)
const store = createStoreWithMiddleware(reducer)

const load = storage.createLoader(engine)
load(store)

const routes = [
  { component: AllNotes }
]

class AsprovNotes extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
          style={{ flex: 1 }}
          ref='nav'
          initialRouteStack={routes}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
      </Provider>
    )
  }
  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps}/>
  }
  configureScene(route, routeStack) {
    if (route.type == 'addingNote') {
      return Navigator.SceneConfigs.FloatFromBottomAndroid
    }
    if (route.type == 'editingNote'){
      return Navigator.SceneConfigs.FloatFromBottomAndroid
    }
    return Navigator.SceneConfigs.FloatFromRight
  }
}

AppRegistry.registerComponent('AsprovNotes', () => AsprovNotes)
