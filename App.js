import React from 'react';
import {View, Text, SafeAreaView} from 'react-native'
import Card from './src/components/cards/card';
import AppContainer from './src/navigation';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = props => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <AppContainer/>
    </GestureHandlerRootView>
  )
}
export default App;