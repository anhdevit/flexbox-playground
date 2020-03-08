import Flex from '../feature/Tab/Editor/Flex';
import Layout from '../feature/Tab/Editor/Layout';
import Alignment from '../feature/Tab/Editor/Alignment';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function EditorTabbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Flex" component={Flex} />
        <Tab.Screen name="Alignment" component={Alignment} />
        <Tab.Screen name="Layout" component={Layout} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}