/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';

import AppContainer from './router/index';

const App: React.FC<any> = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>123</Text>
          <AppContainer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
