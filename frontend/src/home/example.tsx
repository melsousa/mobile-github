import { Text, View } from "react-native";
import { Container, TextHome } from "./styles";
import { useState } from "react";
interface TestProps {
    text: string
}

export function Example({text}: TestProps) {
    
    return(

        
        <Container>
            <TextHome>
                {text}
            </TextHome>
        </Container>
    )
}

