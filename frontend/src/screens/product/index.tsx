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
            <Text style={styles.title}>Cadastre seu produto</Text>
           <Text style={styles.textInput}>Nome do produto</Text> 
           <TextInput
            value={name}
            onChange={handleOnChangeName }
            placeholder="nome"            
            style={styles.TextAreaInput} 
           />

           

           <Text style={styles.textInput}>Imagem do produto</Text> 
           <TextInput
            value={image}
           onChange={handleOnChangeImage}
            placeholder="imagem"
            style={styles.TextAreaInput} 
           />

          <Text style={styles.textInput}>Preço do produto</Text> 
           <TextInput
            value={price}
           onChange={handleOnChangePrice}
            placeholder="preço"
            style={styles.TextAreaInput} 
           />


        <TouchableOpacity style={styles.botao} onPress={() => createProduct()}>
                <Text style={styles.botaoText}>Criar Produto</Text>
        </TouchableOpacity>
        </View>
    );
}