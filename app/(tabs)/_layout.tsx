import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index';
import ExploreScreen from './explore';
import LeaderPage from './leaderinformationpage';
import PaymentPage from './paymentpage';
import ReviewPage from './reviewpage';
import SuccesPage from './succespage';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="LeaderPage" component={LeaderPage} />
      <Stack.Screen name="PaymentPage" component={PaymentPage} />
      <Stack.Screen name="ReviewPage" component={ReviewPage} />
      <Stack.Screen name="SuccesPage" component={SuccesPage} />
    </Stack.Navigator>
  );
}
