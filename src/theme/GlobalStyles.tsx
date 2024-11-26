import { StyleSheet } from "react-native";
import { Color } from "./Color";

export const GlobalStyles = StyleSheet.create({
    pantallaPrincipal: {
        fontSize: 70,
        fontFamily:  'Cochin',
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
        color:Color.texto,
    },
    pantallaSecundaria:{
        fontSize: 35,
        fontFamily:  'Cochin',
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
        color:Color.texto,
        opacity: 0.3,
        padding: 10
    },
    
    container: {
        flex: 1,
        backgroundColor: Color.fondo,
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
    },
    boton: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: 'black',
        borderRadius: 50,
        backgroundColor: Color.botonNumeros,
        color:Color.textoBoton,
        borderWidth: 3,
    },
    botonPulsado:{
        opacity:0.6
    },
    
  });