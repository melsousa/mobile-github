import { ImageBackground, Text, View, StatusBar } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import {MaterialIcons, Feather, FontAwesome} from '@expo/vector-icons'
import { useNavigation, useRoute } from "@react-navigation/native";

interface DetailsParams {
    price: string;
    nameProduct: string;
}

export default function Details(){
    
    const route = useRoute();
    const {price, nameProduct} = route.params as DetailsParams

    const navigation = useNavigation();
    return(
        
        <View style={styles.conteiner}>
            <StatusBar/>
            <ImageBackground
                style={styles.header}
                source = {
                    require("../../../assets/play2.jpeg")
                }
                imageStyle={styles.img}
            >

            <View style={styles.row}>
                    
                    <TouchableOpacity style={styles.buttomHeader}>
                        <MaterialIcons name="arrow-back" size={28} />
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.buttomHeader}>
                        <Feather name="shopping-cart" size={28}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        
        <View style={styles.body}>
            <Text style={styles.nameProduct}>{nameProduct}</Text>
            <View style={styles.rowBody}>
                <View style={styles.stars}>
                    <FontAwesome name="star" size={20} style={styles.star}/>
                    <FontAwesome name="star" size={20} style={styles.star}/>
                    <FontAwesome name="star" size={20} style={styles.star}/>
                    <FontAwesome name="star" size={20} style={styles.star}/>
                    <FontAwesome name="star-half-empty" size={20} style={styles.star}/>

                    <Text style={styles.rate}>(4.5)</Text>
                </View>
                
                <View style = {styles.rowIncraseBtn}>
                    <TouchableOpacity 
                        style={[styles.btnIncrase, {backgroundColor:"#C9C9C9"}]}
                        // onPress={handleRemoveValue}}
                        
                        >
                        <Feather name = "minus" size ={24}/>
                    </TouchableOpacity>

                    <Text>1</Text>
                    <TouchableOpacity 
                        style={[styles.btnIncrase, {backgroundColor:"#C9C9C9"}]}
                        // onPress={handleRemoveValue}}
                        
                        >
                        <Feather name = "plus" size ={24} color="#fff"/>
                    </TouchableOpacity>
                </View>
                

            </View> 
            <Text style = {styles.titleSubSection}>
                    Descrição
            </Text>
            <Text style = {styles.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia porro qui ipsa officiis quia eum iure autem, aspernatur, exercitationem adipisci odit laborum, necessitatibus dolorem ipsum praesentium recusandae eius. Adipisci, reprehenderit.
            </Text>
        </View> 

        <View style={styles.footer}>
            <View>
                <Text style={styles.titlePrice}> Preço </Text>
                <Text style={styles.price}> R$ {price} </Text>
            </View>

            <TouchableOpacity style={styles.btnCart} onPress={() => navigation.navigate('Cart')} >
                <Text style={styles.btnCartText}>Adicionar ao Carrinho</Text>

            </TouchableOpacity>

        </View>
    </View>
    );
}