import { TouchableOpacityProps } from "react-native";
import { CardContainer, CardImage, CardTitle, CardPrice, Content, CardOffer, FavoriteButton } from "./styles";
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

interface CardProps extends TouchableOpacityProps{
    product : Product;
}
interface CategoryProps {
    id: number
    name: string
}
export interface Product{
    category: CategoryProps
    name: string;
    image: string;
    price: number;
} 


export function Card ({product ,...rest}: CardProps){

    const navigation = useNavigation();

    return(
        
        <CardContainer {...rest} onPress={() =>  navigation.navigate('Details', {price: product.price, nameProduct: product.name})} >
            
            <CardImage source={require('../../assets/play2.jpeg')}/>
            <Content>
                <CardTitle>{product?.name}</CardTitle>
                <CardPrice>{product?.price}</CardPrice>
                <CardOffer>R$ {product?.price}</CardOffer>

                <FavoriteButton>
                    <FontAwesome name= 'heart' size={16} color="#616161" />
                </FavoriteButton>
            </Content>
           
        </CardContainer>
        
    );
}