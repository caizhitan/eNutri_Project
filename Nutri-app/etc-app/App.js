import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NativeWindStyleSheet } from "nativewind";
import HomePage from './etc-app_module/pages/HomePage';


NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();



const App = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
      }}
      >
      <Stack.Screen name='HomePage' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


