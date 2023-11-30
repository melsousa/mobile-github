import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
    },
    content: {
      flex: 1,
      marginTop: StatusBar.currentHeight 
    },
    header: {
      width: '100%',
      paddingHorizontal: 32,
      paddingVertical: 26,
      alignItems: 'center',
      position: 'relative',
      borderBottomWidth: 1,
      borderBottomColor: '#E6E5E5'
    },

    headerTitle: {
      fontWeight: 'bold',
      fontSize: 24,
      color:  '#403937'
    },

    body: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: '#E6E5E5',
    },

    titleOrder: {
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
    },

    subtitle: {
      fontWeight: 'normal',
      fontSize: 15,
      padding: 20,
      color: "#808080"
    },

    quantidade :{
      color: "red",
    },

    contentQuantidade: {
      padding: 20,
    }, 

    title :{
      color: "black",
      padding: 20
    },

    pay :{
      flex: 1,
      padding: 20,
      alignItems: "flex-start",
      fontWeight: 'bold',
      backgroundColor: "rgba(128, 128, 128, 0.2)",
      
    },

    method:{
      fontSize: 25
    },


    listaPay:{
      flex: 1,
      padding: 20,
      alignItems:   "flex-start"
    }, 

    btnConfirmation: {
      width: '100%',
      paddingVertical: 12,
      paddingHorizontal: 8,
      backgroundColor: '#C47F17',
      borderRadius: 6
    },
    bntConfirmationText: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: "bold",
        textAlign: "center"
    },

    
});
    