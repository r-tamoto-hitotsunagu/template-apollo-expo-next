import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserListScreen, AddUserScreen } from '../screens';
import type { UserStacks } from './types';

const UserStack = createNativeStackNavigator<UserStacks>();
export const UserNavigator = memo(() => {
  return (
    <UserStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="UserListScreen"
    >
      <UserStack.Screen name="UserListScreen" component={UserListScreen} />
      <UserStack.Screen name="AddUserScreen" component={AddUserScreen} />
    </UserStack.Navigator>
  );
});

export * from './types';
