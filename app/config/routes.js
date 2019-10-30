import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        },
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            title: 'Settings'
        },
    }
});

export default createAppContainer(AppNavigator);