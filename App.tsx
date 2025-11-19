import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AnimalProvider } from './components/AnimalContext';
import AnimalList from './components/AnimalList';
import Login from './components/Login';
import AdoptionScreen from './components/AdoptionScreen';
import AccountScreen from './components/AccountScreen';
import ReservationScreen from './components/ReservationScreen';

export type RootStackParamList = {
  Home: undefined;
  AnimalList: { loggedIn: boolean; user?: any };
  Login: undefined;
  AdoptionScreen: { animal: any }; // Adjust type as needed
  ReservationScreen: { animal: any };
  AccountScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: any) {
  const handleConferirAnimais = () => {
    navigation.navigate('AnimalList', { loggedIn: false });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>Adote.me</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleConferirAnimais}>
        <Text style={styles.loginButtonText}>Conferir Animais</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButtonBelow} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButtonTextBelow}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <AnimalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AnimalList" component={AnimalList} options={{ title: 'Animais Disponíveis' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
          <Stack.Screen name="AdoptionScreen" component={AdoptionScreen} options={{ title: 'Adoção' }} />
          <Stack.Screen name="ReservationScreen" component={ReservationScreen} options={{ title: 'Reserva' }} />
          <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ title: 'Conta' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AnimalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButtonBelow: {
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonTextBelow: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
