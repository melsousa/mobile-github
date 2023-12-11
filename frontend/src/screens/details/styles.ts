import { StyleSheet } from "react-native";
import { styled } from "styled-components/native";

export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        width: '100%',
    },
    header: {
        width: "100%",
        height: 300,
        paddingTop: "10%",
        backgroundColor: "#F4F4F4",
        borderBottomLeftRadius: 42,
        borderBottomRightRadius: 42,
        marginBottom: 24,
    },
    img: {
        height: 300,
        width: '100%',
        borderBottomLeftRadius: 42,
        borderBottomRightRadius: 42,
        paddingHorizontal: 42,
        objectFit: 'cover',
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 24,
    },

    buttomHeader: {
        backgroundColor:"#fff",
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    body:{
        marginHorizontal: 24,
    },

    nameProduct:{
        fontWeight: "bold",
        fontSize: 24,
    },

    rowBody:{

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
    },

    stars:{
        flexDirection: "row",
        gap: 4,
        color: "#ffb00",
        alignItems: "center"
    },
    star:{
        color: "#ffbf00"
    },

    rate:{
        color: "#C9C9C9",
    },

    rowIncraseBtn :{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12,
        alignItems: "center",
    },

    valueIncraseBtn : {
        fontWeight: "bold",
        fontSize: 18, 
        minWidth: 25,
        textAlign: 'center'



    },

    btnIncrase: {
        padding: 6,
        borderRadius: 20,
        
    },

    titleSubSection :{
        fontWeight: "bold",

    },

    description: {
        textAlign: "justify",
        color: "#C9C9C9",
    },

    footer :{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: "#C9C9C9",
        width:"100%"
    },

    titlePrice: {
        color: "#C9C9C9",
        fontSize: 14,
    },

    price :{
        fontSize: 22,
        fontWeight: "bold",
    },

    btnCart: {
        backgroundColor: "#C9C9C9",
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        height: 51.5
    },

    btnCartText : {
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff",
    },

});
    
