import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Home from './source/screens/Home.js';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Classes from './source/screens/Classes.js';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';

function App() {
  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }
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
