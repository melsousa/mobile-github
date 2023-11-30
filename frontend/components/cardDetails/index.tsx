import { FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image, ImageProps } from "react-native";
import { View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { styles } from "./styles";

export interface ProductCardProps{
    id: number;
    name: string;
    description: string;
    image: ImageProps["source"];
    price: number;
} 

interface Product {
    product : ProductCardProps
}


export function ProductCartCard({product }: Product) {
  return (
    <View style={styles.productCardContainer}>
      <Image
          style={styles.imageProduct}
          source={product.image}
        />
      <View style={styles.productDetails}>
        <View style={styles.productTitleContainer}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.productPrice}>R$ {product.price}</Text>
        </View>

        <View style={styles.actions}>
          <View style={styles.counter}>
            <TouchableOpacity style={styles.decrementButton}>
              <Feather
                name="minus"
                size={20}
                color={'#FFF'}
              />
            </TouchableOpacity>
            <Text> 1 </Text>
            <TouchableOpacity style={styles.addButton}>
              <Feather
                name="plus"
                size={20}
                color={'#FFF'}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.trashButton}>
            <Feather
              name="trash-2"
              size={20}
            />
          </TouchableOpacity>
        </View>
    </View>
</View>
  )
}
