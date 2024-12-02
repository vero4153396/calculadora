import { Pressable,ViewStyle, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../theme/GlobalStyles";
import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    tipo: "operaciones" |"numeros" |"otros"|"cero"
    onPress: () => void;
}

export const BotonOperacion = ({label,tipo, onPress}:Props) => {
    const buttonStyle:ViewStyle[] =[
        GlobalStyles.boton,
        tipo==="operaciones" ? GlobalStyles.botonOperacion: tipo==="numeros" ? GlobalStyles.botonNumero: tipo==="otros" ? GlobalStyles.botonEspecial:GlobalStyles.botonCero
    ]

    const vibrar = () => {
        onPress()
        Haptics.selectionAsync();
        console.log("estoy vibrandoooo")
    }


    return (
        <Pressable>
            <Text
                style={buttonStyle}
                onPress={vibrar}>{label}</Text>
        </Pressable>
    )
    
};