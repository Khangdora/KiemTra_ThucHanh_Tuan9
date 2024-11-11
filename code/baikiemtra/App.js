import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './components/store';

// or any files within the Snack
import Launch from './components/Launch';
import List from './components/List';
import Detail from './components/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Launch">
          <Stack.Screen name="Launch" component={Launch} options={{ headerShown: false }} />
          <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}