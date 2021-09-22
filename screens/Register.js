import React from 'react'
import {useState} from 'react'
import { StyleSheet, Text, View, TextInput,Button } from 'react-native'

export default function Register() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () =>{
        console.log(firstName)
        console.log(lastName)
        console.log(username)
        console.log(password)
    }
  
    return (
    <View style={styles.container}>
        <TextInput placeholder='First Name' style={styles.input} maxLength={40} onChangeText={text=>setFirstName(text)}></TextInput>
        <TextInput placeholder='Last Name' style={styles.input} maxLength={40} onChangeText={text=>setLastName(text)}></TextInput>
        <TextInput placeholder='Username' style={styles.input} maxLength={40} onChangeText={text=>setUsername(text)}></TextInput>
        <TextInput placeholder='Password' style={styles.input} maxLength={40} onChangeText={text=>setPassword(text)}></TextInput>
        <Button title='register' onPress={handleSubmit}/>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
      input: {
        height: 40,
        margin: 12,
        width:300,
        borderWidth: 1,
        padding: 10,
        borderColor:'black'
    },
  });