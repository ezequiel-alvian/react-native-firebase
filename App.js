// import { Button, StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import UserCreateScreen from './src/components/UserCreateScreen'
// import DetailsScreen from './src/components/DetailsScreen';
// import HomeScreen from './src/components/HomeScreen';


//const Stack = createNativeStackNavigator()
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='UserCreateScreen' component={UserCreateScreen}/>
//         <Stack.Screen name='HomeScreen' component={HomeScreen}/>
//         <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsScreen from './src/componentsTwo/SettingsScreen'
import SearchScreen from './src/componentsTwo/SearchScreen'
import StackScreen from './src/componentsTwo/StackScreen/StackScreen'
import HomeScreen from './src/componentsTwo/HomeScreen';

import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <AntDesign
                  name={
                    focused
                      ? 'user'
                      : 'user'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <AntDesign
                  name={focused ? 'minuscircleo' : 'minuscircleo'}
                  size={size}
                  color={color}
                />
              );
            }else if (route.name === 'Search') {
              return (
                <Octicons 
                  name={focused ? 'search' : 'search'}
                  size={size} 
                  color={color} 
                />
              );
            }else if (route.name === 'Stack') {
              return (
                <Octicons 
                  name={focused ? 'stack' : 'stack'}
                  size={size} 
                  color={color} 
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
        />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
        />
        <Tab.Screen 
          name="Stack" 
          component={StackScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}