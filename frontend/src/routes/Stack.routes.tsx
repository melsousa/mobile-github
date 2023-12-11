import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/profile';
import Details from '../screens/details';
import Cart from '../screens/cart';
import Login  from '../screens/login'
import Order from '../screens/order'
import Product from '../screens/product';
import Cadastro from '../screens/cadastro';
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  Text } from "react-native";

const Stack = createStackNavigator();

export default function MyStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{
      
    }}>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Home"  options={{
          headerRight:() => (
            <TouchableOpacity style={styles.botao}  onPress={() => navigation.navigate('Product')} >
              <Text>Cadastro de Produto</Text>
            </TouchableOpacity>

          )
      }} component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Details" options={{headerShown: false}} component={Details} />
      <Stack.Screen  name="Cart" options={{headerShown: false}}component={Cart} />
      <Stack.Screen  name="Order" options={{headerShown: false}}component={Order} />
      <Stack.Screen  name="Product" component={Product} />
      
      <Stack.Screen  name="Cadastro" component={Cadastro} />
      
      
    </Stack.Navigator>
  );
}