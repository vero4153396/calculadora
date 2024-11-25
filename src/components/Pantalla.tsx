import { Text, type TextProps, StyleSheet } from 'react-native';

interface Props extends TextProps {};

export const Pantalla = ({children, ...rest}:Props) => {
  return (
    <Text style={styles.pantallaPrincipal} {...rest}>
        {children}
    </Text>
  )
}

const styles = StyleSheet.create({
    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
    },
  });
