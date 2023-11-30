import {  Text, View } from "react-native";
import { styles } from "./styles";
import { useLogin } from '../../modules/login/hooks/userLogin'
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Button from "../../../components/Button";

export default function Profile(){
    const {user} = useSelector((state: RootState) => state.userReducer)

    return(
        <View style={styles.body}>
            <Text style={styles.textPrincipal}>Informações Pessoais</Text>
            <Text>Nome: {user?.name}</Text>
            <Text>email: {user?.email}</Text>
            <Text>Phone: {user?.phone}</Text>
            <Text> CPF: {user?.cpf}</Text>
        </View>
    );
}
