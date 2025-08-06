import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Image, Text, View } from 'react-native'
import { styles } from '../themes/appThemes';
import { BienvenidoGradient } from '../component/GradientLetter';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navegacion/StackNavigator';

type Props = StackScreenProps<RootStackParams, 'Pantalla1'>;

export const Pantalla1 = ({navigation}: Props) => {
    return (
        
            <View style={styles.container}>
                <BienvenidoGradient/>
                <Image style= {styles.avatar} source={{ uri: 'https://imgs.search.brave.com/do8C-qUNrjZGdY_sUYznr5hjcb9RfkcW8bT1YAyXwd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA2/L1N1cGVybWFuLUxv/Z28tMTk4Ni01MDB4/MzMzLnBuZw' }} />
            <View style={styles.superButton}>
            <Text style={styles.acceder} onPress={()=> navigation.navigate('Pantalla2')}>Acceder</Text>
            </View>
            </View>
    )
}
