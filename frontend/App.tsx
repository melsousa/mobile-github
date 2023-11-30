import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/home';
import { Example } from './src/home/example';
import Button from './components/Button';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes/>
   </Provider>
  );
}

