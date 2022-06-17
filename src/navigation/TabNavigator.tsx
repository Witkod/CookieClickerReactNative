import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import {CookieScreen} from '../screens/CookieScreen';
import {StoreScreen} from '../screens/StoreScreen';

export const TabNavigator: React.FC = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Cookie" component={CookieScreen} />
      <Tabs.Screen name="Store" component={StoreScreen} />
    </Tabs.Navigator>
  );
};
