import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Home({ navigation }) {

  const goLogin = () => {
    navigation.navigate('Login')
  }

  const goRegister = () => {
    navigation.navigate('Register')
  }

    return (
      <View style={styles.container}>
        <Text>Login or Sign up for a new account</Text>
        <View style={{flexDirection:'row', marginTop: 40}}>
          <Button title='login' onPress={goLogin}/>
          <Button title='register' onPress={goRegister}/>
        </View>
      </View>
  
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

