import {useRef, useState, useEffect} from 'react';

enum Operadores {
    sumar = '+',
    restar = '-',
    multiplicar = '*',
    dividir = '/',
}

export const useCalculadora = () =>{

    const [formula, setFormula] = useState('0');
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    //no es tipo use state porque no se va a escribir en ningu sitio de tipo enum operaciones
    const UltimaOperacion = useRef<Operadores>();

    //un hook
    useEffect(() => {
        if (UltimaOperacion.current) {
            const primeraParteFormula = formula.split(' ').at(0);
            setFormula(`${ primeraParteFormula} ${UltimaOperacion.current} ${numero}`);
        } else {
            setFormula(numero);
        }
        
    }, [numero]);

    useEffect(() =>{
        const resultado = calcularResultado();
        setNumeroAnterior(`${resultado}`);

    },[formula]);

    const clean = () => {
        setFormula('0');
        setNumero('0');
        setNumeroAnterior('0');
        UltimaOperacion.current = undefined;  
    }

    const cambiarSigno = () => {
        if (numero.includes('-')) {
            return setNumero(numero.replace('-',''));
        } else {
            return setNumero('-' + numero);
        }

    }

    const borrarDigito = () => {
        let signo = '';
        let numeroTemporal = numero;

        if (numero.includes('-')) {
            signo = '-';
            numeroTemporal = numero.substring(1);
        }
        if (numeroTemporal.length > 1) {
            return setNumero(signo+ numeroTemporal.slice(0,-1));
        } else {
            return setNumero('0');
        }
    }

    const establecerUltimoNumero = () => {
        resultado();
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0,-1));
        }
        setNumeroAnterior(numero);
        setNumero('0');
    }

    const operacionDividir = () => {
        establecerUltimoNumero();
        UltimaOperacion.current = Operadores.dividir;
    }

    const operacionMultiplicar = () => {
        establecerUltimoNumero();
        UltimaOperacion.current = Operadores.multiplicar;
    }

    const operacionRestar = () => {
        establecerUltimoNumero();
        UltimaOperacion.current = Operadores.restar;
    }

    const operacionSumar = () => {
        establecerUltimoNumero();
        UltimaOperacion.current = Operadores.sumar;
    }

    const calcularResultado = () => {
        const [primerValor, operacion, segundoValor] = formula.split(' ');

        const num1 = Number(primerValor);
        const num2 = Number(segundoValor);

        if (isNaN(num2)) return num1;

        switch(operacion) {
            case Operadores.sumar:
                return num1 + num2;

            case Operadores.restar:
                return num1 - num2;

            case Operadores.multiplicar:
                return num1 * num2;

            case Operadores.dividir:
                return num1 / num2;

            default:
                throw new Error(`La operación ( ${operacion} ) no está implementada `)
        }
    }

    const resultado = () => {
        const resultado = calcularResultado();
        setFormula(`${resultado}`);
        UltimaOperacion.current = undefined;
        setNumeroAnterior('0');
    }

    const construirNumero = (teclaNumero: string) => {

        //Verificar si se escribe el punto decimal
        if (numero.includes('.') && teclaNumero === '.') return;
        
        if (numero.startsWith('0') || numero.startsWith('-0')){
            if (teclaNumero === '.') {
                return setNumero(numero+ teclaNumero);
            }

            if (teclaNumero ==='0' && numero.includes('.')) {
                return setNumero(numero + teclaNumero);
            }
            //Verificar si es diferentes a cero, no hay punto y es el primer número
            if (teclaNumero !== '0' && !numero.includes('.')){
                return setNumero(teclaNumero);
            }
            if (teclaNumero === '0' && !numero.includes('.')){
                return;
            }
        }
        return setNumero( numero + teclaNumero);

    };


    return {
        // Propiedades
        formula, numero, numeroAnterior,
        //Metodos
        construirNumero,
        clean,
        cambiarSigno,
        borrarDigito,
        operacionDividir,
        operacionMultiplicar,
        operacionRestar,
        operacionSumar,
        calcularResultado,
        resultado
    }
};