import { Text, type TextProps, StyleSheet } from 'react-native';
import { GlobalStyles } from '../theme/GlobalStyles';

interface Props extends TextProps {
  tipo: "principal"|"secundaria"
};

export const Pantalla = ({tipo,children, ...rest}:Props) => {
  switch(tipo){
    case "principal":
      return (
        <Text style={GlobalStyles.pantallaPrincipal} {...rest}>
            {children}
        </Text>
      )
    case "secundaria":
      return (
        <Text style={GlobalStyles.pantallaSecundaria} {...rest}>
            {children}
        </Text>
      )
    default:
      return (
        <Text style={GlobalStyles.pantallaPrincipal} {...rest}>
            {children}
        </Text>
      )
  }
  
}

