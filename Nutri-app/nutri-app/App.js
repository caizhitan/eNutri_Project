import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './Layout/HomePage';
import FoodPage from './Layout/FoodPage';
import DispenserPage from './Layout/DispenserPage';
import CameraPage from './Layout/CameraPage';
import Menu from './Layout/Menu';
import DrawerStyles from './Layout/DrawerStyle';
import { NativeWindStyleSheet } from "nativewind";
import { createDrawerNavigator } from '@react-navigation/drawer';
import FoodDetect from './Layout/FoodDetect';
import FoodAnalyse from './Layout/FoodAnalyse';
import DispenseTiming from './Layout/DispenseTiming';


NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeRoot = () =>{
  return(
    <Drawer.Navigator initialRouteName="Home" 
      screenOptions={{
        headerShown: false
      }}
      drawerContent={DrawerStyles}>
        <Drawer.Screen name='HomePage' component={HomePage} />
        <Drawer.Screen name='Menu' component={Menu} />
      </Drawer.Navigator>
  )
}

const FoodRoot = () => {
  return(
    <Drawer.Navigator initialRouteName='Food'
      screenOptions={{
        headerShown: false
      }}
      drawerContent={DrawerStyles}>
        <Drawer.Screen name='FoodDetect' component={FoodDetect} />
        <Drawer.Screen name='FoodAnalyse' component={FoodAnalyse} />
      </Drawer.Navigator>
  )
}

const App = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
      }}
      >
      <Stack.Screen name='HomeRoot' component={HomeRoot} />
      <Stack.Screen name="Food" component={FoodPage} />
      <Stack.Screen name='Dispenser' component={DispenserPage} />
      <Stack.Screen name='Camera' component={CameraPage} />
      <Stack.Screen name='FoodDetect' component={FoodDetect} />
      <Stack.Screen name='FoodAnalyse' component={FoodAnalyse} />
      <Stack.Screen name='DispenseTiming' component={DispenseTiming} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


