import { View, Text, TextInput, Image, Button } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useLogin } from '../../modules/login/hooks/userLogin';
import { useEffect } from "react";
import { getItemStorage } from "../../functions/storageProxy";
import { AUTHORIZATION_KEY } from "../../shared/constants/authorizationConstants";
import { UserType } from "../../shared/types/UserType";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login() {
  const {
    email,
    password,
    handleOnChangeEmail,
    handleOnChangePassword,
    
  } = useLogin();

  const navigation = useNavigation();

  useEffect(() => {
    console.log('entrou');  
    const entrar = async () => {
      const token = await getItemStorage(AUTHORIZATION_KEY);

      const resultBack = await axios.get<UserType>('http://192.168.137.49:8080/auth', {
        headers:{
          Authorization: token,
          'Content-Type': 'application/json',
        },
      });
      console.log(resultBack.data);

      // if (resultBack){
        navigation.navigate('Home');
      // }
    }
    entrar();
  }, []);

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Home');
    } else {
      
      console.log("Preencha todos os campos antes de logar.");
    }
  };
  
  return (
    <View style={styles.body}>
      {/* Adicione a imagem centralizada */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require('./carrinho-de-compras.png')}
          style={styles.profileImage}
        />
      </View>

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

      <TouchableOpacity  style={styles.botao} onPress={() => handleLogin()}>
        <Text style={styles.botaoText}>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textCadastro}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
