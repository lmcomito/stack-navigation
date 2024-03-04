
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Contact from './src/screens/contato';
import Profile from './src/screens/profle';

export default function App() {
  const Stack = createNativeStackNavigator(); 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Homezinha',
          headerStyle: {
          backgroundColor: '#4184e1',
          },
          headerTintColor: '#fff',
          headerTitle: 'bold',
        }
      }/>
        <Stack.Screen name="Contact" component={Contact} options={{
          title: 'Contatinho',
          headerStyle: {
          backgroundColor: '#4184e1',
          },
          headerTintColor: '#fff',
          headerTitle: 'bold',
        }
      }/>
        <Stack.Screen name="Profile" component={Profile} options={{
          title: 'Profilezinho',
          headerStyle: {
          backgroundColor: '#4184e1',
          },
          headerTintColor: '#fff',
          headerTitle: 'bold',
        }
      }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButton: {
    padding: 10,
    margin: 10, 
    backgroundColor: 'blue',
  }
});
