import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

import { useState } from "react";
import axios from "axios";
import { AUTHORIZATION_KEY } from "../../../shared/constants/authorizationConstants";
import { getItemStorage } from "../../../functions/storageProxy";
export const ProductCrud = () => {
  const [categoryId, setCategoryId] = useState<number>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>();
  const [image, setImage] = useState<string>();

  const createProduct = async () => {
    const token = await getItemStorage(AUTHORIZATION_KEY);
    console.log(token);
    const resultProduct = await axios
      .post(
        "http://192.168.137.49:8080/product",
        {
          categoryId: 1,
          name,
          price: 13,
          image,
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

  // ... (código anterior)

  const listProduct = async () => {
    const token = await getItemStorage(AUTHORIZATION_KEY);
    console.log(token);
    try {
      const resultProduct = await axios.get(
        "http://192.168.137.49:8080/product",
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(resultProduct.data);

      return resultProduct.data; // Adiciona este retorno
    } catch (err) {
      console.log(err);
      return []; // Retorna um array vazio em caso de erro (pode ser ajustado conforme necessário)
    }
  };

  const handleOnChangeName = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setName(event.nativeEvent.text);
  };
  const handleOnChangePrice = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPrice(event.nativeEvent.text);
  };

  const handleOnChangeImage = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setImage(event.nativeEvent.text);
  };

  return {
    categoryId,
    name,
    price,
    image,
    createProduct,
    handleOnChangeName,
    handleOnChangePrice,
    handleOnChangeImage,
    listProduct,
  };
};
