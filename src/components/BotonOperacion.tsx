import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
    label: string,
    width: number,
    onPress?: () => void;
}

export const BotonOperacion = ({label, width, onPress}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[styles.boton, {width}]}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    boton: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: 'black',
        borderWidth: 2,
    }
  });