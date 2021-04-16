import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Home from './source/screens/Home.js';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Classes from './source/screens/Classes.js';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/classes'>
        <Classes />
      </Route>
    </Switch>
  );
}
export default function AppWrapper() {
  return (
    <NativeRouter><App /></NativeRouter>
  )
}
const styles = StyleSheet.create({
  
});
