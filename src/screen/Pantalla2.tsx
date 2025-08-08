import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../themes/appThemes'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormularioGradient } from '../component/GradientLetter';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navegacion/StackNavigator';

type Props = StackScreenProps<RootStackParams, 'Pantalla2'>;

interface setNumero {
    numero1: number;
    numero2: number;
}

export const Pantalla2 = ({ navigation }: Props) => {
    const [formNumero, setNumero] = useState<setNumero>({
        numero1: 0,
        numero2: 0,
    });

    const changeForm = (property: string, value: string): void => {
        //console.log(property + ':' + value)
        setNumero({ ...formNumero, [property]: parseFloat(value) }); //sacar copia ... para acceder a la informacion
    }


    const filtrarSoloNumeros = (texto: string): string => texto.replace(/[^0-9.]/g, '');

    const division = () => {
        const num1 = formNumero.numero1;
        const num2 = formNumero.numero2;
        if (num1 === 0 && num2 === 0) {
            alert('Indeterminacion');
            return;
        }

        if (num2 === 0) {
            alert('No se puede dividir por cero');
            return;
        }

        const resultado = num1 / num2;
        alert(`Resultado: ${resultado}`);
    };


    return (
        <View style={styles.container2}>
            <SafeAreaView style={styles.container2} edges={['left', 'right']}>
                <View style={styles.botonAtras}>
                    <Text style={styles.atras} onPress={() => navigation.navigate('Pantalla1')}>◄</Text>
                </View>
                <FormularioGradient />
                <View style={{ alignSelf: 'center' }}>
                    <Image style={styles.avatar} source={{ uri: 'https://imgs.search.brave.com/do8C-qUNrjZGdY_sUYznr5hjcb9RfkcW8bT1YAyXwd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA2/L1N1cGVybWFuLUxv/Z28tMTk4Ni01MDB4/MzMzLnBuZw' }} />
                </View>
                <SafeAreaView style={styles.ventana}>
                    <Text style={styles.tituloInput}>Ingrese campo 1:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => changeForm('numero1', filtrarSoloNumeros(texto))}
                        value={formNumero.numero1.toString()}
                        placeholder="Dividendo"
                        keyboardType="numeric"
                    />
                    <Text style={styles.tituloInput}>Ingrese campo 2:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => changeForm('numero2', filtrarSoloNumeros(texto))}
                        value={formNumero.numero2.toString()}
                        placeholder="Divisor"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity style={styles.superButton2} onPress={division}>
                        <Text style={styles.dividir}>Dividir</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </View>
    )
}
