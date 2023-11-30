import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/profile';
import Details from '../screens/details';
import Cart from '../screens/cart';
import Login  from '../screens/login'
import Order from '../screens/order'
import Product from '../screens/product';
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native"

const Stack = createStackNavigator();

export default function MyStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{
      
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home"  options={{
          headerRight:() => (
            <Button title='Cadastro de Produto' onPress={() => navigation.navigate('Product')} />

          )
      }} component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Details" options={{headerShown: false}} component={Details} />
      <Stack.Screen  name="Cart" options={{headerShown: false}}component={Cart} />
      <Stack.Screen  name="Order" options={{headerShown: false}}component={Order} />
      <Stack.Screen  name="Product" options={{headerShown: false}}component={Product} />
      
    </Stack.Navigator>
  );
}