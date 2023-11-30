import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList, ImageProps } from "react-native"
import {useState}  from "react"
import {styles} from "./styles"
import {Feather, FontAwesome} from "@expo/vector-icons"
import {ProductCartCard} from "../../../components/cardDetails"
import { useNavigation } from "@react-navigation/native";

export interface Product{
    id: string;
    name: string;
    description: string;
    image: ImageProps["source"];
    price: string
}

const play1 = require("../../../assets/play2.jpeg")

export default function Cart(){

    const navigation = useNavigation();

    const [cartItem, setCartItem] = useState<Product[]>([
        {id: '1', description: 'playyyyyy', image: play1, name: "playstation", price: '150.00'},
        {id: '2', description: 'playyyyyy', image: play1, name: "playstation", price: '150.00'},
        {id: '3', description: 'playyyyyy', image: play1, name: "playstation", price: '150.00'},
        {id: '4', description: 'playyyyyy', image: play1, name: "playstation", price: '150.00'},

    ])
    
    return(
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Carrinho</Text>
                        <TouchableOpacity style={styles.backButton}>
                            <Feather
                                name="arrow-left"
                                size={24}
                                color={"#272221" }
                                onPress={() => navigation.navigate('Details', {price: 150, nameProduct: "Playstation 2"})}
                            />

                        </TouchableOpacity>
                    </View>

                    <View style={styles.body}>
                        <FlatList 
                            data={cartItem}
                            renderItem={({item:product}) => (
                                <ProductCartCard
                                    product={product}
                                    key={product.id}
                                />
                            )}
                        />
                    </View>
                </View>
            </SafeAreaView>

            <View style = {styles.footer}>
                <View style = {styles.footerContent}>
                   <View style = {styles.footerHeader}>
                        <Text style={styles.footerTitle}>Valor Total</Text>
                        <Text style={styles.totalCart}>R$ 1200</Text>
                   </View>
                   <TouchableOpacity style={styles.btnConfirmation} onPress={() => navigation.navigate('Order')}>
                            <Text style={styles.bntConfirmationText}>
                                Confirmar pedido
                            </Text>

                    </TouchableOpacity>
                </View>
            </View>
            
        </>
    );
}