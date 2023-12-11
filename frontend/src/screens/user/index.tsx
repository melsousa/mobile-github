import axios from "axios";
import { UserCrud } from "../../modules/user/userCrud";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import { TouchableOpacity } from "react-native-gesture-handler";

export default function Product() {
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

  return (
    <View style={styles.body}>
      <Text style={styles.textInput}>name</Text>
      <TextInput
        value={name}
        onChange={handleOnChangeName}
        placeholder="name"
      />

      <Text style={styles.textInput}>email</Text>
      <TextInput
        value={email}
        onChange={handleOnChangeEmail}
        placeholder="email"
      />

     <Text style={styles.textInput}>password</Text>
      <TextInput
        value={password}
        onChange={handleOnChangePassword}
        placeholder="password"
      />

      <Text style={styles.textInput}>phone</Text>
      <TextInput
        value={phone}
        onChange={handleOnChangePhone}
        placeholder="phone"
      />

    <Text style={styles.textInput}>cpf</Text>
      <TextInput
        value={cpf}
        onChange={handleOnChangeCpf}
        placeholder="cpf"
      />


      

      <TouchableOpacity onPress={() => createUser()}>
        <Text>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}
