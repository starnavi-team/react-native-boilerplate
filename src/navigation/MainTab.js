/* eslint-disable flowtype/require-parameter-type,react/prop-types */
import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import WelcomeScreen from '../../screens/Welcome';
import AboutUsScreen from '../../screens/AboutUs';

export default TabNavigator(
  {
    Home: {
      screen: WelcomeScreen,
    },
    'About Us': {
      screen: AboutUsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'About Us':
            iconName = 'code';
            break;
          default:
            iconName = 'code';
        }
        return (
          <Icon
            name={iconName}
            size={20}
            style={{ marginBottom: -3 }}
            color={focused ? '#424242' : '#BDBDBD'}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeTintColor: '#424242',
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  },
);
