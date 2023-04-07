// TODO: bottom navigationi burda kur

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// screen vermiyicem stack vericem. stacklerde screen var. (nested navigation)

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
