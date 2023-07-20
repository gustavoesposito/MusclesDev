import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const stackRoutes = createStackNavigator();

import constants from '../global/styles/constants';
import { PersonalChoose } from '../pages/PersonalChoose/PersonalChoose';

//here to import my views
import { Home } from '../pages/Home/Home';

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      title: '',
      headerTransparent: true,
      headerShown: false,
      cardStyle: {
        backgroundColor: constants.colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Home" component={Home} />
    <stackRoutes.Screen name="PersonalChoose" component={PersonalChoose} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
