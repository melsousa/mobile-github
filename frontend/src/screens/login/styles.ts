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
});
