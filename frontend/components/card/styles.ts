// styles.ts

import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  background-color: #e67e22; /* Cor de fundo modificada */
  width: 100%;
  height: 150px;
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center; /* Centralize os itens horizontalmente */
  
`;

export const Content = styled.View`
  width: 60%;
  padding: 15px;
  justify-content: space-between;
`;

export const CardImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 40%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const CardTitle = styled.Text`
  color: #fff; /* Cor do texto modificada para branco */
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CardPrice = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const CardOffer = styled.Text`
  color: #fff;
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
  background-color: rgba(255, 255, 255, 0.8); /* Fundo com opacidade */
  border-radius: 15px;
`;
