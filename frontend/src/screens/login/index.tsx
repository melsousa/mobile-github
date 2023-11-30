import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import  Input from "../../../components/input"
import Button from "../../../components/Button";
import Home from "../../home"
import { useNavigation } from "@react-navigation/native";
import { useLogin } from '../../modules/login/hooks/userLogin'
import { useEffect } from "react";
import { getItemStorage } from "../../functions/storageProxy";
import { AUTHORIZATION_KEY } from "../../shared/constants/authorizationConstants";
import { UserType } from "../../shared/types/UserType";
import axios from "axios";


export default function Login(){

    const {
        email, 
        password, 
        handleOnChangeEmail, 
        handleOnChangePassword,
        handleOnpress
    } = useLogin();

    

    useEffect(() => {
        console.log('entrou');  
        const entrar = async () => {
            const token = await getItemStorage(AUTHORIZATION_KEY);

            const resultBack = await axios.get<UserType>('http://192.168.137.49:8080/user', {
                headers:{
                    Authorization: token,
                    'Content-Type': 'application/json',
                },
            });
            console.log(resultBack.data);

            if (resultBack){
                navigation.navigate('Home');
            }
        }
        entrar();
    }, []);

    const navigation = useNavigation();
    
    return(
        <View style={styles.body}>
           <Text style={styles.textInput}>Email</Text> 
           <TextInput
            value={email}
            placeholder="email"
            onChange={handleOnChangeEmail}
            
           />

           <Text style={styles.textInput}>Senha</Text> 
           <TextInput
            value={password}
            placeholder="password"
            onChange={handleOnChangePassword}
            
           />

           <Button onPress={() => handleOnpress()}></Button>
        </View>
    );
}