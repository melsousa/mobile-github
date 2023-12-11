import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff", // Cor de fundo branca
  },

  title :{
    fontSize: 20
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

  

 botao: {
  width: 250,
  height: 45,
  backgroundColor: "#d35400",
  borderRadius: 5,
  margin: 10,
  alignItems:'center',
  justifyContent: 'center'
 },
 textCadastro:{
  color: '#000'
 },

 botaoText: {
  fontSize: 16,
  color: "#fff",
  
 }
});
