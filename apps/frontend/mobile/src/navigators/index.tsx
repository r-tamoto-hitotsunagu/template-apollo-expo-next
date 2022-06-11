import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStacks } from './type';
import { UserNavigator } from '$feature/user';

const RootStack = createNativeStackNavigator<RootStacks>();
export const Navigator = memo(() => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="UserStacks"
      >
        <RootStack.Screen name={'UserStacks'} component={UserNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
});
