import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

import { useState } from "react";
import axios from "axios";
import { AUTHORIZATION_KEY } from "../../shared/constants/authorizationConstants";
import { getItemStorage } from "../../functions/storageProxy";
export const UserCrud = () => {
  const [typeUser, setTypeUser] = useState<number>();
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>();
  const [cpf, setCpf] = useState<string>();
  const [password, setPassword] = useState<string>();

  const createUser = async () => {
    const token = await getItemStorage(AUTHORIZATION_KEY);
    console.log(token);
    const resultProduct = await axios
      .post(
        "http://192.168.137.49:8080/user",
        {
          typeUser: 1,
          name,
          email,
          phone,
          cpf,
          password,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnChangeName = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setName(event.nativeEvent.text);
  };
  const handleOnChangePhone = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPhone(event.nativeEvent.text);
  };

  const handleOnChangePassword = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPassword(event.nativeEvent.text);
  };
  const handleOnChangeEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setEmail(event.nativeEvent.text);
  };
  const handleOnChangeCpf = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setCpf(event.nativeEvent.text);
  };

  return {
    typeUser,
    name,
    email,
    phone,
    password,
    cpf,
    createUser,
    handleOnChangeName,
    handleOnChangePassword,
    handleOnChangeEmail,
    handleOnChangePhone,
    handleOnChangeCpf,
  };
};
