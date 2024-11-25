import { Text, type TextProps, StyleSheet } from 'react-native';

interface Props extends TextProps {};

export const Pantalla2 = ({children, ...rest}:Props) => {
  return (
    <Text style={styles.pantallaPrincipal} {...rest}>
        {children}
    </Text>
  )
}

const styles = StyleSheet.create({
    pantallaPrincipal: {
        fontSize: 40,
        textAlign: 'right',
        width: '90%',
    },
  });
