import { Text, View, Button, FlatList } from "react-native";
import {useNavigation} from '@react-navigation/native'

import { Card } from "../../components/card";
import { ProductCrud } from "../modules/product/createProduct/ProductCrud";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";


export interface ProductProps{
    category: CategoryProps;
    name: string;
    image: string;
    price: number;
} 

interface CategoryProps {
    id: number
    name: string
}




export default function Home(){
    const navigation = useNavigation();

    const {
        listProduct,

    } = ProductCrud();

    const [product, setProduct] = useState<ProductProps[]>([])
    
    useEffect(() => {
        async function getProduct() {
            const products = await listProduct(); // Chama a função listProduct
            setProduct(products); // Atualiza o estado com os produtos obtidos
        }
    
        getProduct(); // Chama a função getProduct
    }, []);
    
    return (
        <>
              
            <FlatList style={{backgroundColor:'#0a3d62'}}
            data={product}
            renderItem={({ item }) => <Card product={item} />} // Ajuste aqui
        
            />

        </>
      );
      
}