import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../theme/GlobalStyles";

interface Props {
    label: string,
    width: number,
    onPress?: () => void;
}

export const BotonOperacion = ({label, width, onPress}:Props) => {
    return (
        <Pressable>
            <Text 
                style={GlobalStyles.boton}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};