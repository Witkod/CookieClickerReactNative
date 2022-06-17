import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export const StoreScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Shop Screen</Text>
    </SafeAreaView>
  );
};
