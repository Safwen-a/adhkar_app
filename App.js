import { StatusBar } from 'expo-status-bar';
import { View, Button, StyleSheet } from 'react-native';
import FirstPage from './components/screens/FirstPage';
import SecondPage from './components/screens/SecondPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThirdPage from './components/screens/ThirdPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

// Function to initialize the database and add items
const initializeDatabase = async () => {
  try {
    // Check if the database is already initialized
    const isInitialized = await AsyncStorage.getItem('databaseInitialized');
    if (isInitialized !== null) {
      return; // Database is already initialized, no need to add items
    }

    // Add items to the database
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
    await AsyncStorage.setItem('items', JSON.stringify(items));

    // Mark the database as initialized
    await AsyncStorage.setItem('databaseInitialized', 'true');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

export default function App() {
  // Call the initializeDatabase function when the app is launched
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FirstPage} options={{ title: "My Home Page" }} />
        <Stack.Screen name="Athkar" component={SecondPage} options={{ title: "My Athkar Page" }} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} options={{ title: "My Third Page" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
