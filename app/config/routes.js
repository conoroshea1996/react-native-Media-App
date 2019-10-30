import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MusicScreen from '../screens/MusicScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5 } from '@expo/vector-icons';



const AppNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome5 name="home" style={{ fontSize: 25 }}></FontAwesome5>
            )
        },

    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome5 name="facebook" style={{ fontSize: 25 }}></FontAwesome5>
            )
        },
    },
    Media: {
        screen: MusicScreen,
        navigationOptions: {
            tabBarLabel: 'Tunes',
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome5 name="music" style={{ fontSize: 25 }}></FontAwesome5>
            )
        },
    },

}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveBackgroundColor: 'pink'
    }
}
);

export default createAppContainer(AppNavigator);