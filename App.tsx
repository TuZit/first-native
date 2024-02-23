/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FlexBox from '@/screens/FlexBox';
import Home from '@/screens/Home';
import LearnFirst from '@/screens/LearnFirst';
import Pokemon from '@/screens/Pokemon';
import Login from '@/screens/Login';
import { Pressable, Text, Alert } from 'react-native';

const Stack = createNativeStackNavigator();
const BottomBar = createBottomTabNavigator<any>();

const BottomTabBar = () => {
  return (
    <BottomBar.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          borderRadius: 30,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      })}
    >
      <BottomBar.Screen name='Home' component={Home} />
      <BottomBar.Screen name='FlexBox' component={FlexBox} />
      <BottomBar.Screen name='LearnFirst' component={LearnFirst} />
      <BottomBar.Screen name='pokemon' component={Pokemon} />
    </BottomBar.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='bottom-bar'
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: '#6a51ae' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: '#fff',
          contentStyle: { backgroundColor: '#e8e4f3' },
          headerRight: () => (
            <Pressable onPress={() => Alert.alert('Menu button pressed!')}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Menu</Text>
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='FlexBox' component={FlexBox} />
        <Stack.Screen name='LearnFirst' component={LearnFirst} />
        <Stack.Screen name='bottom-bar' component={BottomTabBar} />
        <Stack.Screen name='pokemon' component={Pokemon} />
        <Stack.Screen name='login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
