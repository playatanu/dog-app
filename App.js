import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, ProfileScreen, DogScreen} from './lib/screens';

const ProfileStack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        options={{title: 'Profile'}}
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{title: 'Hey! Doggy'}}
        name="HomeScreen"
        component={HomeScreen}
      />

      <HomeStack.Screen
        options={({route}) => ({title: route.params.name})}
        name="DogScreen"
        component={DogScreen}
      />
    </HomeStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontWeight: '700',
            fontSize: 15,
          },
          tabBarIconStyle: {display: 'none'},
        }}
        headerMode="none"
        initialRouteName="Home">
        <Tabs.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeStackScreen}
        />
        <Tabs.Screen
          options={{headerShown: false}}
          name="Profile"
          component={ProfileStackScreen}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
