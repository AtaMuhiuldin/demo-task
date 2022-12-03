import React, { createRef } from "react";
import {
  NavigationContainer,
  StackActions
} from "@react-navigation/native";
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack'

import HomeScreen from '../screens/homeScreen';
import CardScreen from '../screens/cardScreen';
const Stack = createStackNavigator();

export const navigationRef = createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function push(name, params) {
  const pushAction = StackActions.push(name, params);
  navigationRef.current?.dispatch(pushAction);
}


const AppContainer = ({}) => {
return (
    <NavigationContainer
      ref={navigationRef}
    >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                }}
                />

<Stack.Screen
                name="CardScreen"
                component={CardScreen}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                }}
                />
            
        </Stack.Navigator>
    </NavigationContainer>)
}
export default AppContainer;

