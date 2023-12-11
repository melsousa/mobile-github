import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useLogin } from '../../modules/login/hooks/userLogin';
import { useEffect } from "react";
import { getItemStorage } from "../../functions/storageProxy";
import { AUTHORIZATION_KEY } from "../../shared/constants/authorizationConstants";
import { UserType } from "../../shared/types/UserType";
import axios from "axios";
import { UserCrud } from "../../modules/user/userCrud";

export default function Cadastro() {
  const {
    typeUser,
    name,
    email,
    phone,
    password,
    cpf,
    createUser,
    handleOnChangeName,
    handleOnChangePassword,
    handleOnChangePhone,
    handleOnChangeEmail,
    handleOnChangeCpf,
  } = UserCrud();

  const navigation = useNavigation();

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

      // if (resultBack){
        navigation.navigate('Login');
      // }
    }
    entrar();
  }, []);

  return (
    <View style={styles.body}>
      
      

      <Text style={styles.textInput}>Nome</Text>
      <TextInput
        value={email}
        placeholder="email"
        onChange={handleOnChangeEmail}
        style={styles.TextAreaInput} 
      />
      <Text style={styles.textInput}>Email</Text>
      <TextInput
        value={email}
        placeholder="email"
        onChange={handleOnChangeEmail}
        style={styles.TextAreaInput} 
      />

      <Text style={styles.textInput}>Senha</Text>
      <TextInput
        value={password}
        placeholder="password"
        onChange={handleOnChangePassword}
        style={styles.TextAreaInput} 
        secureTextEntry={true} // Para esconder a senha
      />

      <Text style={styles.textInput}>phone</Text>
      <TextInput
        value={phone}
        onChange={handleOnChangePhone}
        placeholder="phone"
        style={styles.TextAreaInput}
      />

    <Text style={styles.textInput}>cpf</Text>
      <TextInput
        value={cpf}
        onChange={handleOnChangeCpf}
        placeholder="cpf"
        style={styles.TextAreaInput}
      />

     <TouchableOpacity  style={styles.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.botaoText}>Cadastrar Usuário</Text>
      </TouchableOpacity>

       
       
    </View>
  );
}
