import React from 'react';
import { View } from 'react-native';
import Svg, { Text as SvgText, Defs, LinearGradient, Stop } from 'react-native-svg';

const GradientLetter = ({ letter, index }: { letter: string; index: number }) => (
    <Svg height="50" width="40">
        <Defs>
            <LinearGradient id={`grad${index}`} x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0" stopColor="#FF0000" /> 
                <Stop offset="1" stopColor="#c8ff00ff" />
            </LinearGradient>
        </Defs>
        <SvgText
            fill={`url(#grad${index})`}
            fontSize="32"
            fontWeight="bold"
            x="10"
            y="40"
        >
            {letter}
        </SvgText>
    </Svg>
);

export const BienvenidoGradient = () => {
    const word = 'Bienvenido';
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 16 }}>
            {word.split('').map((char, idx) => (
                <GradientLetter key={idx} letter={char} index={idx} />
            ))}
        </View>
    );
};

export const FormularioGradient = () => {
    const word = 'Formulario';
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 16 }}>
            {word.split('').map((char, idx) => (
                <GradientLetter key={idx} letter={char} index={idx} />
            ))}
        </View>
    );
};