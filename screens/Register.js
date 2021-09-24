import React from 'react'
import {useState} from 'react'
import { StyleSheet, View, TextInput,Button } from 'react-native'

import axios from 'axios';

// import client from '../api/client'


export default function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // const fetchApi = (data) =>{
    //     axios.get('http://192.168.0.18:3000/register')
    //     console.log(data)
    // }


    const handleSubmit = () =>{
      const data = {
        "firstName": firstName,
        "lastName": lastName,
        "username": username,
        "password": password
      }
      
        // fetchApi(data)
        console.log(data)

        // await axios.post('http://192.168.0.18:3000/', data)
         axios.post('http://192.168.0.18:3000/',{...data})
  
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