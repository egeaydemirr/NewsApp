import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './reddit/screens/Home';
import Settings from './reddit/screens/Settings';
import {Image} from 'react-native';
import RedditStack from './reddit/Stack';

const App = () => {
  const Tab = createBottomTabNavigator();

  //* Stackleri buraya gormerken navigationContaineri kaldir
  //* Stacteki navigatorin containerini kaldir.

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#ff4500',
          //add image on assets folder
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Reddit') {
              iconName = focused
                ? require('./reddit/assets/reddit.png')
                : require('./reddit/assets/reddit.png');
            }
            if (route.name === 'Settings') {
              iconName = focused
                ? require('./reddit/assets/settings.png')
                : require('./reddit/assets/settings.png');
            }
            return <Image source={iconName} style={{width: 25, height: 25}} />;
          },
        })}>
        <Tab.Screen name="Reddit" component={RedditStack} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
