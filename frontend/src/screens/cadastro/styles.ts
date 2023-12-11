import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff", // Cor de fundo branca
  },

  textInput: {
    textAlign: "left",
    padding: 10,
    alignSelf: "flex-start",
    marginBottom: 10, // Adicionado espaçamento inferior
    fontSize: 16, // Tamanho da fonte
    fontWeight: "bold", // Negrito
    color: "#333", // Cor do texto
    
  },

  TextAreaInput:{
    textAlign: "left",
    padding: 10,
    alignSelf: "flex-start",
    marginBottom: 10, // Adicionado espaçamento inferior
    fontSize: 16, // Tamanho da fonte
    fontWeight: "bold", // Negrito
    color: "#333", // Cor do texto
    backgroundColor: "#dfe4ea",
    width: "100%",
  },

  // Adicionando estilos para a foto centralizada
  profileImageContainer: {
    marginBottom: 20,
    margintop: 25
  },
  profileImage: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    
    borderRadius: 50, // Borda arredondada para criar um círculo
    backgroundColor: "#ccc", // Cor de fundo de fallback
  },

  botao: {
    width: 250,
    height: 45,
    backgroundColor: "#ffb142",
    borderRadius: 5,
    margin: 10,
    alignItems:'center',
    justifyContent: 'center'
   },
   botaoText: {
    fontSize: 16,
    color: "#fff",
    
   },

   botaoVoltar: {
    width: 250,
    height: 45,
    backgroundColor: "#4285F4",  // Cor de fundo para o botão de voltar
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});
