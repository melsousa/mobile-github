import { useState } from 'react';
import {Container, Button} from './styles'
export default function Home(){
    const [text, setText] = useState('texto antigo')

    const handleButton = (texto:string) => {
        setText(texto)
    }
    return(
        <Container>
            <Button title={text} color={"black"} onPress = {() => handleButton("texto novo")}></Button>
        </Container>
    );
}