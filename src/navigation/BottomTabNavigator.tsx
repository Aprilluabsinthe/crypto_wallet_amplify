/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons , AntDesign, MaterialIcons,FontAwesome} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList } from '../../types';
import HomeScreen from "../screens/HomeScreen";
import PortforlioScreen from "../screens/PortforlioScreen";
import MarketScreen from "../screens/MarketScreen";
import RankingsScreen from "../screens/RankingsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Assets"
        component={PortforlioScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="piechart" size={30}  color={color} />,
        }}
      />
        <BottomTab.Screen
            name="Market"
            component={MarketScreen}
            options={{
                tabBarIcon: ({ color }) => <AntDesign name="linechart" size={30} color={color} />,
            }}
        />
        <BottomTab.Screen
            name="Rankings"
            component={RankingsScreen}
            options={{
                tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" size={30} color={color} />,
            }}
        />
        <BottomTab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarIcon: ({ color }) => <FontAwesome name="user-circle-o" size={30} color={color} />,
            }}
        />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

