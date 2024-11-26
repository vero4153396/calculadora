import { StyleSheet } from "react-native";
import { Color } from "./Color";

export const GlobalStyles = StyleSheet.create({
    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
    },
    
    container: {
      flex: 1,
      backgroundColor: Color.background,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    boton:{
        backgroundColor: '#6558f',
        padding:10
    },
    botonPulsado:{
        opacity:0.6
    },
    
  });