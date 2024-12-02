import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/theme/GlobalStyles';
import * as Haptics from 'expo-haptics';
import { Operadores } from './src/hooks/useCalculadora';




export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operacion,resultado  } = useCalculadora();

  return (
  
    <View style={GlobalStyles.container}>    
      <Pantalla numberOfLines={1} tipo="principal" adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla numberOfLines={1} tipo="secundaria" adjustsFontSizeToFit> </Pantalla>
      ) : (
        <Pantalla numberOfLines={1} tipo="secundaria" adjustsFontSizeToFit>{numeroAnterior}</Pantalla>
      )}
      
      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <BotonOperacion label='C' tipo="otros"  onPress={clean}></BotonOperacion>
      <BotonOperacion label='±' tipo="otros" onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion label='del' tipo="otros" onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion label='÷'  tipo="operaciones" onPress={() =>operacion(Operadores.dividir)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='7' tipo="numeros" onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion label='8'  tipo="numeros" onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion label='9' tipo="numeros" onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion label='×' tipo="operaciones" onPress={() =>operacion(Operadores.multiplicar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='4' tipo="numeros" onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion label='5' tipo="numeros" onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion label='6' tipo="numeros" onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion label='-' tipo="operaciones" onPress={() =>operacion(Operadores.restar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='1' tipo="numeros" onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion label='2' tipo="numeros" onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion label='3' tipo="numeros" onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion label='+' tipo="operaciones" onPress={() =>operacion(Operadores.sumar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='0' tipo="cero" onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion label='.' tipo="numeros" onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion label='=' tipo="operaciones" onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}
