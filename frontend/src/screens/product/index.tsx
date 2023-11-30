import axios from "axios";
import { ProductCrud } from "../../modules/product/createProduct/ProductCrud";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import { TouchableOpacity } from "react-native-gesture-handler";


export default function Product(){

    
    const {
        createProduct,
        handleOnChangeName,
        handleOnChangePrice,
        handleOnChangeImage,
        categoryId,
        name,
        price,
        image
    } = ProductCrud();
    
    
    return(
        <View style={styles.body}>
           <Text style={styles.textInput}>name</Text> 
           <TextInput
            value={name}
            onChange={handleOnChangeName }
            placeholder="name"            
            
           />

           {/* <Text style={styles.textInput}>price</Text> 
           <TextInput
            value={price}
            onChange={handleOnChangePrice}   
            placeholder="price"
              
           /> */}

           <Text style={styles.textInput}>image</Text> 
           <TextInput
            value={image}
           onChange={handleOnChangeImage}
            placeholder="image"
             
           />


        <TouchableOpacity  onPress={() => createProduct()}>
                <Text>Criar</Text>
        </TouchableOpacity>
        </View>
    );
}