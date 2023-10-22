import React from 'react';
import {View} from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen";
import { PaperProvider} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import  DrawerScreen from "./screens/DrawerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Unit1Screen from "./screens/Unit1Screen";
import Unit1Screen1 from "./screens/Unit1Screen1";
import Unit1Screen2 from "./screens/Unit1Screen2";
import Unit1Screen3 from "./screens/Unit1Screen3";
import Unit1Screen4 from "./screens/Unit1Screen4";
import Unit1Scren4 from "./screens/Unit1Scren4";
import Unit1Screen5 from "./screens/Unit1Screen5";
import Unit1Screen6 from "./screens/Unit1Screen6";
import Unit1Screen7 from "./screens/Unit1Screen7";
import Unit1Screen8 from "./screens/Unit1Screen8";
import Unit2Screen from "./screens/Unit2Screen";
import Unit2Screen1 from "./screens/Unit2Screen1";
import Unit2Screen2 from "./screens/Unit2Screen2";
import Unit2Screen3 from "./screens/Unit2Screen3";
import Unit2Screen4 from "./screens/Unit2Screen4";
import Unit2Screen5 from "./screens/Unit2Screen5";
import Unit3Screen from "./screens/Unit3Screen";
import Unit3Screen1 from "./screens/Unit3Screen1";
import Unit3Screen2 from "./screens/Unit3Screen2";
import Unit3Screen3 from "./screens/Unit3Screen3";
import Unit3Screen4 from "./screens/Unit3Screen4";
import Unit3Screen5 from "./screens/Unit3Screen5";
import Unit4Screen from "./screens/Unit4Screen";
import Unit4Screen1 from "./screens/Unit4Screen1";
import Unit4Screen2 from "./screens/Unit4Screen2";
import Unit5Screen from "./screens/Unit5Screen";



const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

export default function App () {
  return (
    /* <NavigationContainer>
    <Drawer.Navigator drawerContent={() => <DrawerScreen />}>
      <Drawer.Screen name="welcome" component={WelcomeScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
    */

  <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerMode: 'none',
      }}
      >
<Stack.Screen 
  name="Welcome"
  component={WelcomeScreen}
  
  />

  <Stack.Screen
  name="Drawer"
  component={DrawerScreen}
  
  />
<Stack.Screen
  name="Unit 1"
  component={Unit1Screen}
  
  />
<Stack.Screen
  name="Unit1Screen1"
  component={Unit1Screen1}
  />
  <Stack.Screen
  name="Unit1Screen2"
  component={Unit1Screen2}
  />
<Stack.Screen
  name="Unit1Screen3"
  component={Unit1Screen3}
  />
  <Stack.Screen
  name="Unit1Screen4"
  component={Unit1Screen4}
  />
  <Stack.Screen
  name="Unit1Scren4"
  component={Unit1Scren4}
  />
  <Stack.Screen
  name="Unit1Screen5"
  component={Unit1Screen5}
  />
<Stack.Screen
  name="Unit1Screen6"
  component={Unit1Screen6}
  />
<Stack.Screen
  name="Unit1Screen7"
  component={Unit1Screen7}
  />
 <Stack.Screen
  name="Unit1Screen8"
  component={Unit1Screen8}
  /> 
<Stack.Screen
  name="Unit2Screen"
  component={Unit2Screen}
  />
 <Stack.Screen
  name="Unit2Screen1"
  component={Unit2Screen1}
  /> 
  <Stack.Screen
  name="Unit2Screen2"
  component={Unit2Screen2}
  />
   <Stack.Screen
  name="Unit2Screen3"
  component={Unit2Screen3}
  />
  <Stack.Screen
  name="Unit2Screen4"
  component={Unit2Screen4}
  />
  <Stack.Screen
  name="Unit2Screen5"
  component={Unit2Screen5}
  />
  <Stack.Screen
  name="Unit3Screen"
  component={Unit3Screen}
  />
  <Stack.Screen
  name="Unit3Screen1"
  component={Unit3Screen1}
  />
  <Stack.Screen
  name="Unit3Screen2"
  component={Unit3Screen2}
  />
  <Stack.Screen
  name="Unit3Screen3"
  component={Unit3Screen3}
  />
  <Stack.Screen
  name="Unit3Screen4"
  component={Unit3Screen4}
  />
  <Stack.Screen
  name="Unit3Screen5"
  component={Unit3Screen5}
  />
  <Stack.Screen
  name="Unit4Screen"
  component={Unit4Screen}
  />
  <Stack.Screen
  name="Unit4Screen1"
  component={Unit4Screen1}
  />
  <Stack.Screen
  name="Unit4Screen2"
  component={Unit4Screen2}
  />
   <Stack.Screen
  name="Unit5Screen"
  component={Unit5Screen}
  />
</Stack.Navigator>
    </NavigationContainer>



  )
}
