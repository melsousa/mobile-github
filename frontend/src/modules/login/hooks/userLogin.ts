import { useState,  } from 'react';
import axios from "axios";
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native'; 

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { setUserAction } from '../../../store/reducers/userReducer';
import { useNavigation } from '@react-navigation/native';
import { setItemStorage } from '../../../functions/storageProxy';
import { AUTHORIZATION_KEY } from '../../../shared/constants/authorizationConstants';

export const useLogin = () => {

const navigation = useNavigation();

// const {user} = useSelector((state: RootState) => state.userReducer)
const [email, setEmail] = useState<string>()
const [password, setPassword] = useState<string>()

const dispatch = useDispatch();




const handleOnpress = async () => {
    const resultLogin = await axios
    .post('http://192.168.137.49:8080/auth', {
        email,
        password,
    }).then(result => {
        setItemStorage(AUTHORIZATION_KEY, result.data.accessToken);
        console.log(result.data)
        dispatch(setUserAction(result.data.user)) //result.user
        navigation.navigate("Home")

    }).catch(err => {
        console.log(err)
    })

}

const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(event.nativeEvent.text)
}

const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPassword(event.nativeEvent.text)
}

    return {
        email,
        password,
        // loading,
        // errorMessage,
        handleOnpress,
        handleOnChangeEmail,
        handleOnChangePassword,
    };

}