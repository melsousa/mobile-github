import {  Text, TouchableOpacityProps } from "react-native";
import { ButtonContainer, Texto } from "./styles";
import { ReactNode } from "react";

interface ButtonProps extends TouchableOpacityProps{
    
}

export default function Button({...children}:ButtonProps){
    return(

        <ButtonContainer  {...children}>
            <Texto>Logar</Texto>
        </ButtonContainer>
    );
}