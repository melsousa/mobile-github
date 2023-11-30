// styles.ts

import { styled } from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
    background-color: #fff;
    width: 100%;
    height: 150px;
    border-radius: 10px;
    flex-direction: row;
    margin-bottom: 10px; /* Adicionado espaçamento entre os cards */
    
`;

export const Content = styled.View`
    width: 60%;
    padding: 15px; /* Adicionado espaçamento interno */
`;

export const CardImage = styled.Image.attrs({
    resizeMode: "contain",
})`
    width: 40%;
    height: 100%;
    border-top-left-radius: 10px; /* Adicionado borda arredondada na parte superior esquerda */
    border-bottom-left-radius: 10px; /* Adicionado borda arredondada na parte inferior esquerda */
`;

export const CardTitle = styled.Text`
    color: #333; /* Alterada cor do texto */
    font-size: 18px; /* Aumentado o tamanho do texto */
    font-weight: bold; /* Adicionado negrito */
    margin-bottom: 8px;
`;

export const CardPrice = styled.Text`
    color: #FC6B07;
    font-size: 16px;
    font-weight: bold;
`;

export const CardOffer = styled.Text`
    color: #808080; /* Alterada cor do texto de oferta */
    font-size: 12px;
    text-decoration-line: line-through;
`;

export const FavoriteButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-radius: 15px;

`;
