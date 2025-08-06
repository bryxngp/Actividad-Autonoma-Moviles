import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StackNavigator } from './src/navegacion/StackNavigator';



const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}
export default App;