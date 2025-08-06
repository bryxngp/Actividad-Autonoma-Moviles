import { createStackNavigator } from "@react-navigation/stack";

import { Pantalla1 } from "../screen/Pantalla1";
import { Pantalla2 } from "../screen/Pantalla2";

export type RootStackParams = {
    Pantalla1: undefined,
    Pantalla2: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#000000ff',
                },
                headerShown: false,
            }}
        >
            <Stack.Screen name="Pantalla1" options={{ title: 'Home' }} component={Pantalla1} />
            <Stack.Screen name="Pantalla2" component={Pantalla2} />
        </Stack.Navigator>
    );
}